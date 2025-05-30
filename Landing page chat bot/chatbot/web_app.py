from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import requests
import json
import logging
import os
import sys
import subprocess
import uuid
from dotenv import load_dotenv

# Set up logging
logging.basicConfig(level=logging.INFO, 
                   format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

def setup_environment(use_mock=False, use_kb=True, model_type="llama"):
    """Set up environment variables for the webhook server"""
    os.environ["MODEL_TYPE"] = model_type
    os.environ["USE_MOCK"] = "true" if use_mock else "false"
    os.environ["USE_KB"] = "true" if use_kb else "false"
    
    # Log configuration
    logger.info(f"MODEL_TYPE set to: {model_type}")
    logger.info(f"USE_MOCK set to: {'true' if use_mock else 'false'}")
    logger.info(f"USE_KB set to: {'true' if use_kb else 'false'}")

def initialize_app():
    """Initialize the Flask application with all necessary setup"""
    # Load environment variables
    load_dotenv()

    # Create Flask app
    app = Flask(__name__)
    CORS(app)  # Enable CORS for all routes

    # Check if knowledge base needs processing
    if not os.path.exists('kb_processed.json'):
        logger.info("Knowledge base processed file not found. Running processor...")
        try:
            subprocess.run([sys.executable, 'kb_processor.py'], check=True)
            logger.info("Knowledge base processed successfully.")
        except Exception as e:
            logger.error(f"Error processing knowledge base: {str(e)}")
            # Continue with fallback data

    return app

# Initialize Flask app
app = initialize_app()

# Initialize session storage
sessions = {}

# Configuration
DIALOGFLOW_PROJECT_ID = os.getenv('DIALOGFLOW_PROJECT_ID', '')
DIALOGFLOW_LANGUAGE = os.getenv('DIALOGFLOW_LANGUAGE', 'en')
WEBHOOK_URL = "http://localhost:5000/dialogflow/es/receiveMessage"

# Load knowledge base data
def load_knowledge_base():
    try:
        # First try to load the full processed knowledge base
        with open('kb_processed.json', 'r', encoding='utf-8') as f:
            data = json.load(f)
            kb_data = {}
            
            # Check if this is the detailed format from kb_processor.py
            if 'knowledge_base' in data and isinstance(data['knowledge_base'], dict):
                logger.info("Loading detailed knowledge base from kb_processed.json")
                # This is the detailed format with keywords
                for entry_id, entry in data['knowledge_base'].items():
                    kb_data[entry_id] = {
                        "answer": entry.get('answer', ''),
                        "question": entry.get('question', ''),
                        "category": entry.get('category', ''),
                        "keywords": entry.get('keywords', []),
                        "source_file": entry.get('source_file', '')
                    }
                logger.info(f"Loaded {len(kb_data)} entries from detailed knowledge base")
                return kb_data
            
        # Fall back to simplified format
        with open('knowledge_base.json', 'r', encoding='utf-8') as f:
            data = json.load(f)
            kb_data = {}
            
            # New structure - support both formats
            if isinstance(data['knowledge_base'], list):
                logger.info("Loading simplified knowledge base from knowledge_base.json")
                if 'keyword' in data['knowledge_base'][0]:
                    # Format with keyword-answer pairs
                    for item in data['knowledge_base']:
                        keyword = item.get('keyword', '').lower()
                        # Extract category from keyword if possible
                        category = keyword.split('_')[0].replace('_', ' ').title() if '_' in keyword else ''
                        
                        kb_data[keyword] = {
                            "answer": item['answer'],
                            "question": "",
                            "category": category,
                            "keywords": [keyword.replace('_', ' ')],
                            "source_file": ""
                        }
                    logger.info(f"Loaded {len(kb_data)} entries from simplified knowledge base")
                    return kb_data
            
        # If we reach here, something went wrong with both files
        raise Exception("Could not parse knowledge base files")
            
    except Exception as e:
        logger.error(f"Error loading knowledge base: {str(e)}")
        # Fallback to hardcoded data
        return {
            "about_restaurant": {
                "answer": "Taste of India is a premium Indian restaurant offering authentic dishes from across India. We specialize in traditional recipes prepared with fresh ingredients and serve both vegetarian and non-vegetarian options. Our menu includes tandoori specialties, curries, biryanis, and more.",
                "question": "What is Taste of India?",
                "category": "Restaurant Information",
                "keywords": ["taste of india", "restaurant", "about", "what is"],
                "source_file": "manual_entry"
            },
            "view_cuisines": {
                "answer": "Here are our available cuisines: North Indian, South Indian, Chinese, Continental, and Street Food. Each cuisine offers a variety of vegetarian and non-vegetarian options. Would you like to explore a specific cuisine?",
                "question": "View Cuisines",
                "category": "Menu Information",
                "keywords": ["cuisine", "menu", "food", "dishes"],
                "source_file": "manual_entry"
            },
            "track_order": {
                "answer": "To track your order, please provide your order number and I'll check its status for you.",
                "question": "Track Order",
                "category": "Order Tracking",
                "keywords": ["track", "order", "status", "where"],
                "source_file": "manual_entry"
            }
        }

KB_DATA = load_knowledge_base()
logger.info(f"Loaded {len(KB_DATA)} items into knowledge base")

@app.route('/')
def index():
    """Render the chat interface"""
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    """Handle chat requests from the web interface"""
    try:
        data = request.json
        user_message = data.get('message', '').lower()
        session_id = request.cookies.get('session_id', str(uuid.uuid4()))
        
        logger.info(f"Received message: {user_message}")
        
        # Find relevant knowledge base entries
        matches = []
        for entry_id, entry in KB_DATA.items():
            score = 0
            
            # Exact match with question
            if entry.get("question", "").lower() == user_message:
                score += 100
            
            # Partial match with question
            elif entry.get("question", "").lower() and user_message in entry["question"].lower():
                score += 50
            
            # Keyword matches
            for keyword in entry.get("keywords", []):
                if keyword.lower() in user_message:
                    score += 30
            
            # Category match
            if entry.get("category", "").lower() in user_message:
                score += 20
            
            if score >= 20:  # Lower threshold to include more context
                matches.append({
                    "entry": entry,
                    "score": score
                })
        
        # Sort matches by score
        matches.sort(key=lambda x: x["score"], reverse=True)
        
        # Prepare context for Llama
        context = ""
        if matches:
            context = "Here are some relevant details from our knowledge base:\n\n"
            for match in matches[:3]:  # Use top 3 matches
                entry = match["entry"]
                context += f"Question: {entry.get('question', '')}\n"
                context += f"Answer: {entry.get('answer', '')}\n"
                context += f"Category: {entry.get('category', '')}\n\n"
        
        # Construct prompt for Llama
        prompt = f"""You are SwadSeva Bot, a helpful assistant for the Taste of India restaurant. Use the following information to help answer the user's question. If the provided information is relevant, use it in your response. If not, provide a general restaurant-appropriate response.

{context}
User Question: {user_message}

Please provide a natural, conversational response that:
1. Directly answers the user's question
2. Uses the knowledge base information when relevant
3. Maintains a helpful and friendly tone
4. Stays focused on restaurant-related topics

Response:"""

        # Call Llama API
        try:
            response = requests.post(
                "http://localhost:11434/api/chat",
                json={
                    "model": "llama2",
                    "messages": [
                        {"role": "system", "content": "You are SwadSeva Bot, a helpful assistant for the Taste of India restaurant."},
                        {"role": "user", "content": prompt}
                    ],
                    "stream": False
                },
                headers={"Content-Type": "application/json"}
            )
            
            if response.status_code == 200:
                llama_response = response.json()
                return jsonify({
                    'response': llama_response['message']['content'],
                    'session_id': session_id
                })
            else:
                logger.error(f"Error from Llama API: {response.status_code}")
                # Fall back to knowledge base only
                if matches:
                    return jsonify({
                        'response': matches[0]["entry"]["answer"],
                        'session_id': session_id
                    })
        except Exception as e:
            logger.error(f"Error calling Llama API: {str(e)}")
            # Fall back to knowledge base only
            if matches:
                return jsonify({
                    'response': matches[0]["entry"]["answer"],
                    'session_id': session_id
                })
        
        # Default responses if no matches and Llama fails
        if "hello" in user_message or "hi" in user_message:
            response = "Hello! How can I assist you today?"
        elif "bye" in user_message:
            response = "Goodbye! Have a great day!"
        else:
            response = "I'm sorry, I couldn't find a specific answer to your question. Could you please rephrase or ask something else?"
        
        return jsonify({
            'response': response,
            'session_id': session_id
        })
    
    except Exception as e:
        logger.error(f"Error processing request: {str(e)}")
        return jsonify({
            'response': 'Sorry, I encountered an error while processing your request.',
            'session_id': session_id
        })

def send_to_dialogflow_es(text, session_id):
    """
    Send a text query to Dialogflow ES API
    
    Args:
        text: User's message
        session_id: Unique session identifier
        
    Returns:
        Dict with response
    """
    try:
        if not DIALOGFLOW_PROJECT_ID:
            logger.warning("DIALOGFLOW_PROJECT_ID not set, falling back to local webhook")
            return send_to_webhook_with_kb(text, session_id)
        
        # This requires the google-cloud-dialogflow package and authentication setup
        # For simplicity, we'll mock this by calling our webhook with a modified payload
        # that includes knowledge base results
        
        # In a real implementation, you would use:
        # from google.cloud import dialogflow
        # and then call the Dialogflow ES API properly
        
        # For now, let's use our simulated knowledge base by calling the other function
        return send_to_webhook_with_kb(text, session_id)
    
    except Exception as e:
        logger.error(f"Error calling Dialogflow ES: {str(e)}")
        return {
            'response': 'Sorry, I encountered an error while processing your request.',
            'session_id': session_id
        }

def send_to_webhook_with_kb(text, session_id):
    """
    Send a text query to our webhook with knowledge base data
    
    Args:
        text: User's message
        session_id: Unique session identifier
        
    Returns:
        Dict with response
    """
    try:
        # Find relevant knowledge base info based on keywords
        knowledge_answers = []
        text_lower = text.lower()
        kb_used = False
        matches = []
        
        # Extract words and phrases from the query for matching
        query_words = set(text_lower.split())
        query_bigrams = set()
        query_words_list = text_lower.split()
        
        # Generate bigrams from the query
        for i in range(len(query_words_list) - 1):
            query_bigrams.add(f"{query_words_list[i]} {query_words_list[i+1]}")
        
        # Track match scores for ranking
        match_scores = {}
        
        # Check for keyword matches
        for entry_id, entry_data in KB_DATA.items():
            score = 0
            
            # Check for exact matches with highest priority
            if entry_data.get("question", "").lower() == text_lower:
                score += 200
                
            # Direct match with the question (high priority)
            elif entry_data.get("question", "").lower() and text_lower in entry_data["question"].lower():
                score += 50
            
            # Special handling for manual entries
            if entry_data.get("source_file", "") == "manual_entry":
                if entry_data.get("question", "").lower() == text_lower:
                    score += 500
                elif text_lower in entry_data.get("question", "").lower():
                    score += 200
                
            # Check keywords from knowledge base
            for keyword in entry_data.get("keywords", []):
                keyword_lower = keyword.lower()
                if keyword_lower in text_lower:
                    score += 5
                if keyword_lower in query_bigrams:
                    score += 3
                keyword_words = set(keyword_lower.split())
                for word in keyword_words:
                    if len(word) > 3 and word in query_words:
                        score += 1
            
            # Category match
            if entry_data.get("category", "").lower() and any(cat_word in text_lower for cat_word in entry_data["category"].lower().split()):
                score += 2
                
            if score > 0:
                match_scores[entry_id] = score
                
        # Sort matches by score
        sorted_matches = sorted(match_scores.items(), key=lambda x: x[1], reverse=True)
        
        # Get top matches for context
        context_entries = []
        for entry_id, score in sorted_matches[:3]:
            if score >= 30:
                entry = KB_DATA[entry_id]
                context_entries.append({
                    "question": entry["question"],
                    "answer": entry["answer"],
                    "category": entry["category"],
                    "score": score
                })
                kb_used = True
        
        # Create Llama prompt with context
        if context_entries:
            context_str = "\n\n".join([
                f"Question: {entry['question']}\nAnswer: {entry['answer']}\nCategory: {entry['category']}"
                for entry in context_entries
            ])
            
            # Construct the prompt for Llama
            prompt = f"""You are SwadSeva Bot, a helpful assistant for the Taste of India restaurant. Use the following knowledge base entries to help answer the user's question. If the knowledge base entries are relevant, use them to formulate your response. If they're not directly relevant, you can provide a general response based on your restaurant expertise.

Knowledge Base Entries:
{context_str}

User Question: {text}

Please provide a natural, conversational response that:
1. Directly answers the user's question
2. Uses information from the knowledge base when relevant
3. Maintains a helpful and friendly tone
4. Stays focused on restaurant-related topics

Response:"""
        else:
            # Generic prompt for questions without knowledge base matches
            prompt = f"""You are SwadSeva Bot, a helpful assistant for the Taste of India restaurant. The user has asked: "{text}"

Please provide a natural, conversational response that:
1. Directly addresses their question
2. Maintains a helpful and friendly tone
3. Stays focused on restaurant-related topics
4. If you're unsure about specific details, provide general information about Indian restaurants

Response:"""
        
        # Call Llama API
        url = "http://localhost:11434/api/chat"
        payload = {
            "model": "llama2",
            "messages": [
                {"role": "system", "content": "You are SwadSeva Bot, a helpful assistant for the Taste of India restaurant."},
                {"role": "user", "content": prompt}
            ],
            "stream": False
        }
        
        headers = {
            "Content-Type": "application/json"
        }
        
        response = requests.post(url, json=payload, headers=headers)
        
        if response.status_code == 200:
            result = response.json()
            return {
                'response': result['message']['content'],
                'session_id': session_id,
                'used_kb': kb_used
            }
        else:
            logger.error(f"Error from Llama API: {response.status_code} - {response.text}")
            return {
                'response': 'Sorry, there was an error processing your request.',
                'session_id': session_id,
                'used_kb': False
            }
    
    except Exception as e:
        logger.error(f"Error calling webhook: {str(e)}")
        return {
            'response': 'Sorry, I encountered an error while processing your request.',
            'session_id': session_id,
            'used_kb': False
        }

def process_with_local_webhook(text, session_id):
    """
    Send a text query directly to our local webhook without knowledge base info
    
    Args:
        text: User's message
        session_id: Unique session identifier
        
    Returns:
        Dict with response
    """
    try:
        # Create a payload that mimics Dialogflow ES webhook call
        payload = {
            "queryResult": {
                "queryText": text,
                "parameters": {},
                "languageCode": DIALOGFLOW_LANGUAGE
            },
            "session": session_id
        }
        
        headers = {
            "Content-Type": "application/json"
        }
        
        # Send request to our webhook
        logger.info(f"Sending request to webhook: {text}")
        response = requests.post(WEBHOOK_URL, json=payload, headers=headers)
        
        # Check if request was successful
        if response.status_code == 200:
            result = response.json()
            return {
                'response': result.get('fulfillmentText', 'Sorry, I could not understand that.'),
                'session_id': session_id
            }
        else:
            logger.error(f"Error from webhook: {response.status_code} - {response.text}")
            return {
                'response': 'Sorry, there was an error processing your request.',
                'session_id': session_id
            }
    
    except Exception as e:
        logger.error(f"Error calling webhook: {str(e)}")
        return {
            'response': 'Sorry, I encountered an error while processing your request.',
            'session_id': session_id
        }

# Knowledge base management endpoint
@app.route('/admin/knowledge', methods=['GET', 'POST'])
def manage_knowledge():
    """Admin interface to view and manage knowledge base"""
    if request.method == 'GET':
        # Return the knowledge base as JSON
        return jsonify({"knowledge_base": [{"keyword": k, "answer": v["answer"]} for k, v in KB_DATA.items()]})
    elif request.method == 'POST':
        # Add/update knowledge base entry
        try:
            data = request.json
            keyword = data.get('keyword')
            answer = data.get('answer')
            
            if not keyword or not answer:
                return jsonify({"error": "Keyword and answer are required"}), 400
                
            # Update in-memory knowledge base
            KB_DATA[keyword] = {
                "answer": answer,
                "keywords": KB_DATA[keyword]["keywords"]
            }
            
            # Update the JSON file
            kb_json = {"knowledge_base": [{"keyword": k, "answer": v["answer"]} for k, v in KB_DATA.items()]}
            with open('knowledge_base.json', 'w') as f:
                json.dump(kb_json, f, indent=2)
                
            return jsonify({"success": True, "message": f"Added/updated entry for '{keyword}'"})
        except Exception as e:
            logger.error(f"Error updating knowledge base: {str(e)}")
            return jsonify({"error": str(e)}), 500

# Direct API route to Llama model for testing
@app.route('/api/llama', methods=['POST'])
def llama_api():
    """Direct access to Llama model for testing"""
    try:
        data = request.json
        user_message = data.get('message', '')
        
        # Construct Ollama API request
        url = "http://localhost:11434/api/chat"
        
        payload = {
            "model": "llama2",
            "messages": [
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": user_message}
            ],
            "stream": False
        }
        
        headers = {
            "Content-Type": "application/json"
        }
        
        # Send request to Ollama
        response = requests.post(url, json=payload, headers=headers)
        
        # Check if request was successful
        if response.status_code == 200:
            result = response.json()
            return jsonify({
                'response': result['message']['content']
            })
        else:
            return jsonify({
                'response': f"Error from Llama API: {response.status_code}"
            })
            
    except Exception as e:
        logger.error(f"Error calling Llama API: {str(e)}")
        return jsonify({
            'response': f"Error: {str(e)}"
        })

def main():
    """Main function to parse arguments and run the server"""
    import argparse
    
    parser = argparse.ArgumentParser(description='Run the Taste of India Chatbot Server')
    parser.add_argument('--mock', action='store_true', help='Use mock responses instead of actual model')
    parser.add_argument('--no-kb', action='store_true', help='Disable knowledge base integration')
    parser.add_argument('--model', choices=['llama', 'openai'], default='llama', help='Model type to use (default: llama)')
    parser.add_argument('--port', type=int, default=8080, help='Port to run the server on (default: 8080)')
    
    args = parser.parse_args()
    
    # Setup environment
    setup_environment(
        use_mock=args.mock,
        use_kb=not args.no_kb,
        model_type=args.model
    )
    
    # Run the server
    port = args.port
    logger.info(f"Starting server on port {port}...")
    app.run(host='0.0.0.0', port=port, debug=True)

if __name__ == '__main__':
    main() 