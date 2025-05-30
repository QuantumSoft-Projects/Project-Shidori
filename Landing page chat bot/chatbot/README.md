![GitHub User's stars](https://img.shields.io/github/stars/RajKKapadia?style=for-the-badge)
![GitHub followers](https://img.shields.io/github/followers/RajKKapadia?style=for-the-badge)

# Connect OpenAI to Dialogflow CX/ES
Hey everyone, if you are looking for a connection between OpenAI and Dialogflow CX/ES, then read more. You will learn how to connect your existing Dialogflow CX/ES agent to openAI.

# Youtube
I have recorded a quick tutorial on this topic, you can watch it [here]().

### Things you will need
* Dialogflow CX and ES agent
    > some knowledge of Dialogflow CX and ES as well
* OpenAI account and API Key
    > create an account [here](https://openai.com/)
* NGROK for exposing our local server to internet for testing
    > get it from [here](https://ngrok.com/)
* Python as a programing tool
    > install it from [here](https://www.python.org/downloads/)

### How to use it
To replicate the work of this repository and run it locally, you need to follow these steps:
* create a `.env` file inside the root directory, create these environmental variables:
    ```
    OPENAI_API_KEY=YOUR OPENAI API KEY
    ```
* create a virtual environment and activate it before installing the packages
* install all the required dependencies from the `requirements.txt` file
```python
pip install -r requirements.txt
```
* run the server with either of the following commands
```python
python run.py
```
* add the webhook url to Dialogflow
    > CX: YOUR NGROK URL/dialogflow/cx/receiveMessage
    
    > ES: YOUR NGROK URL/dialogflow/es/receiveMessage

# About me
I am `Raj Kapadia`, I am passionate about `AI/ML/DL` and their use in different domains, I also love to build `chatbots` using `Google Dialogflow ES/CX`, I have backend development experience with Python[Flask], and NodeJS[Express] For any work, you can reach out to me at...

* [LinkedIn](https://www.linkedin.com/in/rajkkapadia/)
* [Fiverr](https://www.fiverr.com/rajkkapadia​)
* [Upwork](https://www.upwork.com/freelancers/~0176aeacfcff7f1fc2)
* [Youtube](https://www.youtube.com/channel/UCOT01XvBSj12xQsANtTeAcQ)

# YouTube-Openai-Dialogflow-CX-ES-Python

This project integrates Dialogflow ES or CX with various LLM APIs (OpenAI or Llama 2) to create AI-powered chatbot experiences.

## Installation

1. Clone this repository
2. Create a virtual environment:
   ```bash
   python -m venv venv
   ```
3. Activate virtual environment:
   - Windows: `.\venv\Scripts\activate`
   - Linux/Mac: `source venv/bin/activate`
4. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## Configuration

1. Create a `.env` file in the root directory with your API keys and preferences:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   LLAMA_API_KEY=your_llama_api_key_here  # Optional
   MODEL_TYPE=openai  # Options: openai, llama
   USE_MOCK=true  # Set to false to use actual AI models
   LLAMA_LOCAL_URL=http://localhost:11434/api/chat  # For local Llama 2
   ```

2. Choose your LLM backend:
   - OpenAI (default): Uses ChatGPT API (requires API key)
   - Llama 2: Follow [setup instructions](setup_llama.md)
   - Mock Mode: Uses predefined responses for testing (no API key needed)

## Web Interface

This project includes a web interface that allows users to interact with your chatbot directly from a browser.

### Running the Web Interface

1. Start the Dialogflow webhook server:
   ```bash
   python run.py
   ```

2. In a separate terminal, start the web interface:
   ```bash
   python web_app.py
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:8080
   ```

The web interface will communicate with your Dialogflow webhook and handle the conversation flow.

## Webhook Usage

If you want to use the webhook directly with Dialogflow:

1. Start the Flask application:
   ```bash
   python run.py
   ```
2. The webhook will be available at:
   - Dialogflow ES: `http://localhost:5000/dialogflow/es/receiveMessage`
   - Dialogflow CX: `http://localhost:5000/dialogflow/cx/receiveMessage`

3. Configure your Dialogflow agent to use these webhook URLs.

## Model Selection

This project supports multiple LLM backends:

1. **OpenAI GPT** (Default)
   - Requirements: OpenAI API key
   - Configuration: Set `MODEL_TYPE=openai` in .env

2. **Llama 2**
   - Requirements: Local Llama server or cloud provider API
   - Setup Instructions:
     1. Install Ollama from https://ollama.ai/
     2. Pull the Llama 2 model:
        ```bash
        ollama pull llama2
        ```
     3. Start the Ollama server:
        ```bash
        ollama serve
        ```
     4. Configure the chatbot:
        - Set `MODEL_TYPE=llama` in .env
        - Set `LLAMA_LOCAL_URL=http://localhost:11434/api/chat`
     5. The server will automatically connect to your local Llama instance

3. **Mock Mode**
   - Requirements: None
   - Configuration: Set `USE_MOCK=true` in .env
   - Description: Returns predefined responses for testing

## Dialogflow Integration

### Dialogflow ES
1. Create a Dialogflow ES agent
2. Set up a webhook with URL: `https://your-server/dialogflow/es/receiveMessage`
3. Enable webhook for intents

### Dialogflow CX
1. Create a Dialogflow CX agent
2. Set up a webhook with URL: `https://your-server/dialogflow/cx/receiveMessage`
3. Configure pages to use webhook

## Deployment

For production deployment, consider:
1. Using a production WSGI server like Gunicorn
2. Setting up HTTPS
3. Deploying on a cloud platform like Heroku, Google Cloud, or AWS

## License

This project is available under the MIT license.

# Taste of India Chatbot with Enhanced Knowledge Base

This repository contains a chatbot implementation for "Taste of India" restaurant, which uses Llama 2 or OpenAI for natural language understanding and includes an enhanced knowledge base system sourced from multiple CSV files.

## Features

- **Enhanced Knowledge Base Integration**: Automatically processes and leverages information from multiple CSV files arranged in folders.
- **Intelligent Matching**: Uses keyword extraction and scoring to find the most relevant knowledge base entries for user queries.
- **Web Interface**: Simple chat interface with visual indicators showing when responses come from the knowledge base.
- **Category Labels**: Responses are labeled with relevant categories (Allergen Information, Menu Details, etc.).
- **Flexible Configuration**: Options to use different models, enable/disable features via command line arguments.

## Getting Started

### Prerequisites

- Python 3.8 or later
- Ollama for local Llama 2 (or OpenAI API key)

### Installation

1. Clone this repository
2. Install dependencies:
   ```
   pip install -r requirements.txt
   ```
3. Ensure your knowledge base CSV files are organized in the `Knowledgebase` directory

### Running the Chatbot

1. Process the knowledge base (done automatically on first run):
   ```
   python kb_processor.py
   ```

2. Start the webhook server:
   ```
   python run.py
   ```

3. Start the web interface:
   ```
   python web_app.py
   ```

4. Open your browser and go to http://localhost:8080

### Command-line Options

The webhook server supports several command-line options:

```
python run.py --help
```

Options:
- `--mock`: Use mock responses instead of actual language model
- `--no-kb`: Disable knowledge base integration
- `--model {llama,openai}`: Choose which model to use (default: llama)
- `--port PORT`: Specify server port (default: 5000)

## Knowledge Base Structure

The system uses CSV files from the Knowledgebase directory, which is organized into the following categories:

- Allergen Info & Food Recommendation
- Cancellation Policy & Order History
- Contact Support & Terms and Conditions
- Offer and Discount Subscription Plan
- Operating Hours & Loyalty Program
- Payment Methods
- Track Order, Food Quality and Hygiene

Each CSV file should contain question-answer pairs or training phrases that help the chatbot respond accurately to user queries.

## Web Interface Features

- Clean and simple chat interface
- Visual indicators for knowledge base matches
- Category labels for different types of information
- Responsive design for desktop and mobile

## Technologies Used

- **Flask**: Web server framework
- **Llama 2**: Local large language model
- **OpenAI API** (optional): Alternative LLM service
- **Dialogflow ES Webhook Format**: For compatibility with existing systems

## Customization

You can customize the system by:

1. Adding more CSV files to the knowledge base folders
2. Modifying the categories in `kb_processor.py`
3. Adjusting the matching threshold in `web_app.py`
4. Editing the frontend appearance in `static/styles.css`

## Troubleshooting

- If the knowledge base doesn't load, check file permissions and paths
- If responses don't use the knowledge base, try enabling debug logging
- For model errors, verify API keys or Ollama installation