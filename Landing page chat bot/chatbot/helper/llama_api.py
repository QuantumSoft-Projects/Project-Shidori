import logging
import os
from typing import Dict
import requests
import json

# Configuration for Llama 2
LLAMA_LOCAL_URL = os.getenv('LLAMA_LOCAL_URL', "http://localhost:11434/v1/chat/completions")  # Ollama URL
LLAMA_API_KEY = os.getenv('LLAMA_API_KEY', "")  # Optional API key if needed

def llama_completion(prompt: str, context: str = None) -> Dict:
    """
    Call Llama 2 model API for text completion
    
    Parameters:
        - prompt: user query (str)
        - context: optional knowledge base context from Dialogflow (str)
        
    Returns:
        - dict with status and response
    """
    try:
        # Create system prompt with context if available
        system_prompt = "You are a helpful assistant."
        if context:
            system_prompt = f"""You are a helpful assistant with access to the following knowledge base information. 
Use this information to answer the user's question accurately. 
If the question cannot be answered using this information, respond based on your general knowledge.

KNOWLEDGE BASE:
{context}"""

        # Check if we're using Ollama local URL
        is_ollama = "11434" in LLAMA_LOCAL_URL
        
        if is_ollama:
            # For Ollama API (http://localhost:11434/api/chat)
            ollama_url = LLAMA_LOCAL_URL
            if "/v1/" in ollama_url:
                # Convert from OpenAI-style URL to Ollama API URL
                ollama_url = ollama_url.replace("/v1/chat/completions", "/api/chat")
            
            payload = {
                "model": "llama2",
                "messages": [
                    {"role": "system", "content": system_prompt},
                    {"role": "user", "content": prompt}
                ],
                "stream": False,
                "options": {
                    "temperature": 0.7,
                    "num_predict": 150  # equivalent to max_tokens
                }
            }
        else:
            # Standard OpenAI-compatible format
            payload = {
                "model": "llama2",
                "messages": [
                    {"role": "system", "content": system_prompt},
                    {"role": "user", "content": prompt}
                ],
                "temperature": 0.7,
                "max_tokens": 150
            }
        
        headers = {
            "Content-Type": "application/json"
        }
        
        # Add API key to headers if available
        if LLAMA_API_KEY:
            headers["Authorization"] = f"Bearer {LLAMA_API_KEY}"
            
        logging.info(f"Sending request to Llama 2 model: {prompt[:50]}...")
        logging.info(f"Using URL: {LLAMA_LOCAL_URL}")
        logging.info(f"Payload: {json.dumps(payload)[:200]}...")
        
        response = requests.post(
            LLAMA_LOCAL_URL if not is_ollama or "/api/" in LLAMA_LOCAL_URL else ollama_url,
            json=payload,
            headers=headers
        )
        
        # Check if request was successful
        if response.status_code == 200:
            result = response.json()
            logging.info(f"Raw response: {json.dumps(result)[:200]}...")
            
            # Handle different response formats
            if is_ollama and "message" in result:
                # Ollama format
                return {
                    'status': 1,
                    'response': result["message"]["content"]
                }
            elif "choices" in result and len(result["choices"]) > 0:
                # OpenAI compatible format
                return {
                    'status': 1,
                    'response': result['choices'][0]['message']['content']
                }
            else:
                logging.error(f"Unknown response format: {json.dumps(result)[:200]}")
                return {
                    'status': 0,
                    'response': f"Error: Unknown response format from Llama API"
                }
        else:
            logging.error(f"Llama API error: Status code {response.status_code}")
            logging.error(f"Response text: {response.text}")
            return {
                'status': 0,
                'response': f"Error from Llama API: {response.status_code} - {response.text}"
            }
            
    except Exception as e:
        error_msg = str(e)
        logging.error(f"Llama API error: {error_msg}")
        return {
            'status': 0,
            'response': f"Error connecting to Llama service: {error_msg}"
        } 