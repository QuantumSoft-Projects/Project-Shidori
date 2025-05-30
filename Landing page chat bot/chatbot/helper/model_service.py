import logging
import os
from typing import Dict, Literal, Optional

# Import model specific modules
from .openai_api import text_complition as openai_completion
from .llama_api import llama_completion

# Configure model selection
MODEL_TYPE = os.getenv("MODEL_TYPE", "openai").lower()  # Can be "openai", "llama", or "mock"
USE_MOCK = os.getenv("USE_MOCK", "true").lower() == "true"
USE_KB = os.getenv("USE_KB", "true").lower() == "true"

# Mock responses for when API is unavailable
MOCK_RESPONSES = [
    "I'm a mock AI assistant response. Please configure a proper LLM API.",
    "This is a placeholder response. To use a real model, set USE_MOCK=false.",
    "I'm responding with pre-written text. Connect to OpenAI or Llama for actual responses.",
    "This is a development mode response."
]

def get_completion(prompt: str, model_type: Optional[str] = None, context: Optional[str] = None) -> Dict:
    """
    Route completion request to the appropriate model service.
    
    Parameters:
        - prompt: User query (str)
        - model_type: Override default model (Optional)
        - context: Knowledge base context from Dialogflow (Optional)
        
    Returns:
        - dict with status and response
    """
    selected_model = model_type or MODEL_TYPE
    
    if USE_MOCK:
        logging.info(f"Using mock response for query: {prompt[:50]}...")
        import random
        return {
            'status': 1,
            'response': random.choice(MOCK_RESPONSES)
        }
    
    # Skip knowledge base usage if disabled
    if not USE_KB:
        context = None
        logging.info("Knowledge base usage is disabled")
    
    if selected_model == "openai":
        logging.info(f"Using OpenAI for query: {prompt[:50]}...")
        # For OpenAI, we combine the context with the prompt if available
        if context:
            enhanced_prompt = f"""Use the following information to answer the question:
{context}

Question: {prompt}
Answer:"""
            return openai_completion(enhanced_prompt)
        else:
            return openai_completion(prompt)
    
    elif selected_model == "llama":
        logging.info(f"Using Llama 2 for query: {prompt[:50]}...")
        return llama_completion(prompt, context=context)
    
    else:
        logging.error(f"Unknown model type: {selected_model}")
        return {
            'status': 0,
            'response': f"Error: Unknown model type '{selected_model}'. Valid types are 'openai' or 'llama'."
        } 