from flask import Flask, request, jsonify
import logging
import traceback
from flask_cors import CORS

from helper.model_service import get_completion


app = Flask(__name__)
# Enable CORS for all routes
CORS(app)
logging.basicConfig(level=logging.INFO)


@app.route('/')
def home():
    return 'All is well...'


@app.route('/dialogflow/es/receiveMessage', methods=['POST'])
def esReceiveMessage():
    try:
        data = request.get_json()
        # You can use this action to do different things
        # action = data['queryResult']['action']
        query_text = data['queryResult']['queryText']
        
        # Extract knowledge base information if available
        knowledge_base_context = None
        
        # Check if knowledge base matches exist in the response
        if 'knowledgeAnswers' in data['queryResult'] and data['queryResult']['knowledgeAnswers'].get('answers'):
            answers = data['queryResult']['knowledgeAnswers']['answers']
            knowledge_base_context = "\n\n".join([answer.get('faqAnswer', '') or answer.get('answer', '') for answer in answers])
            logging.info(f"Knowledge base context extracted: {knowledge_base_context[:100]}...")
        
        logging.info(f"ES Request received: {query_text}")

        result = get_completion(query_text, context=knowledge_base_context)

        if result['status'] == 1:
            return jsonify(
                {
                    'fulfillmentText': result['response']
                }
            )
        else:
            logging.error(f"Model API error: {result['response']}")
            return jsonify(
                {
                    'fulfillmentText': 'Error connecting to AI service. Please try again later.'
                }
            )
    except Exception as e:
        error_details = traceback.format_exc()
        logging.error(f"Error in ES webhook: {str(e)}\n{error_details}")
        return jsonify(
            {
                'fulfillmentText': 'Something went wrong. Please try again later.'
            }
        )


@app.route('/dialogflow/cx/receiveMessage', methods=['POST'])
def cxReceiveMessage():
    try:
        data = request.get_json()
        # Use this tag peoperty to choose the action
        # tag = data['fulfillmentInfo']['tag']
        query_text = data['text']
        
        # Extract knowledge base information if available
        knowledge_base_context = None
        
        # For Dialogflow CX knowledge base integration
        if 'knowledgeInfo' in data and data['knowledgeInfo'].get('answers'):
            answers = data['knowledgeInfo']['answers']
            knowledge_base_context = "\n\n".join([answer.get('answer', '') for answer in answers])
            logging.info(f"Knowledge base context extracted: {knowledge_base_context[:100]}...")
        
        logging.info(f"CX Request received: {query_text}")

        result = get_completion(query_text, context=knowledge_base_context)

        if result['status'] == 1:
            return jsonify(
                {
                    'fulfillment_response': {
                        'messages': [
                            {
                                'text': {
                                    'text': [result['response']],
                                    'redactedText': [result['response']]
                                },
                                'responseType': 'HANDLER_PROMPT',
                                'source': 'VIRTUAL_AGENT'
                            }
                        ]
                    }
                }
            )
        else:
            logging.error(f"Model API error: {result['response']}")
            return jsonify(
                {
                    'fulfillment_response': {
                        'messages': [
                            {
                                'text': {
                                    'text': ['Error connecting to AI service. Please try again later.'],
                                    'redactedText': ['Error connecting to AI service. Please try again later.']
                                },
                                'responseType': 'HANDLER_PROMPT',
                                'source': 'VIRTUAL_AGENT'
                            }
                        ]
                    }
                }
            )
    except Exception as e:
        error_details = traceback.format_exc()
        logging.error(f"Error in CX webhook: {str(e)}\n{error_details}")
        return jsonify(
            {
                'fulfillment_response': {
                    'messages': [
                        {
                            'text': {
                                'text': ['Something went wrong. Please try again later.'],
                                'redactedText': ['Something went wrong. Please try again later.']
                            },
                            'responseType': 'HANDLER_PROMPT',
                            'source': 'VIRTUAL_AGENT'
                        }
                    ]
                }
            }
        )
