import os
import logging

from openai import OpenAI
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Get API key from environment
API_KEY = os.getenv('OPENAI_API_KEY')

# Initialize client if API key is available
client = None
if API_KEY:
    client = OpenAI(api_key=API_KEY)

def text_complition(prompt: str) -> dict:
    '''
    Call Openai API for text completion

    Parameters:
        - prompt: user query (str)

    Returns:
        - dict
    '''
    # Check if client is initialized
    if not client:
        return {
            'status': 0,
            'response': "OpenAI API key not configured."
        }
    
    try:
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.7,
            max_tokens=150
        )
        return {
            'status': 1,
            'response': response.choices[0].message.content
        }
    except Exception as e:
        error_msg = str(e)
        logging.error(f"OpenAI API error: {error_msg}")
        
        # Check for specific quota error
        if "insufficient_quota" in error_msg:
            return {
                'status': 0,
                'response': "The OpenAI API quota has been exceeded. Please check your API key's billing status."
            }
        
        return {
            'status': 0,
            'response': f"Error connecting to OpenAI service: {error_msg}"
        }
        