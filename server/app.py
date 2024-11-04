from flask import Flask, jsonify, request, session
from groq import Groq
from dotenv import load_dotenv
import os
from flask_cors import CORS
from langchain.chains import LLMChain
from langchain.prompts.chat import ChatPromptTemplate, HumanMessagePromptTemplate, MessagesPlaceholder
from langchain_core.messages import SystemMessage
from langchain.memory import ConversationBufferWindowMemory
from langchain_groq import ChatGroq
import logging
    
# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

load_dotenv()

app = Flask(__name__)
app.secret_key = 'liaosecretkey'
CORS(app)

with open('context.txt', 'r') as file:
    context = file.read()

conversational_memory_length = 10

# Initialize memory
memory = ConversationBufferWindowMemory(
    k=conversational_memory_length,
    memory_key="chat_history",
    return_messages=True
)


def get_groq_client():
    api_key = os.environ.get("GROQ_API_KEY", "").strip()
    logger.info(f"API key present: {bool(api_key)}")

    if not api_key:
        raise ValueError(
            "GROQ_API_KEY environment variable is not set or empty")

    try:
        client = ChatGroq(
            api_key=api_key,
            model="llama3-70b-8192",
        )
        logger.info("Groq client initialized successfully")
        return client
    except Exception as e:
        logger.error(f"Error initializing Groq client: {str(e)}")
        raise


def fetchResponse(user_prompt):
    try:
        # Get a fresh client for each request
        client = get_groq_client()

        # Load previous chat history from session into memory
        if 'chat_history' in session:
            for message in session['chat_history']:
                memory.save_context(
                    {'input': message['human']},
                    {'output': message['AI']}
                )

        prompt = ChatPromptTemplate.from_messages([
            SystemMessage(content=context),
            MessagesPlaceholder(variable_name="chat_history"),
            HumanMessagePromptTemplate.from_template("{human_input}")
        ])

        conversation = LLMChain(
            llm=client,
            prompt=prompt,
            verbose=True,
            memory=memory
        )

        logger.info("Making API call to Groq...")
        response = conversation.predict(human_input=user_prompt)
        logger.info("API call successful")

        message = {'human': user_prompt, 'AI': response}

        if 'chat_history' not in session:
            session['chat_history'] = []
        session['chat_history'].append(message)
        session.modified = True
        return response

    except Exception as e:
        logger.error(f"Error in fetchResponse: {type(e).__name__}: {str(e)}")
        raise


@app.route('/api/data', methods=['POST'])
def get_data():
    try:
        data = request.json
        user_prompt = data.get("prompt")
        logger.info(f"Received prompt: {user_prompt}")

        if not user_prompt:
            return jsonify({"error": "No prompt provided"}), 400

        response = fetchResponse(user_prompt)
        return jsonify({"response": response})
    except ValueError as e:
        logger.error(f"Value Error: {str(e)}")
        return jsonify({"error": str(e)}), 400
    except Exception as e:
        logger.error(f"Unexpected error: {str(e)}")
        return jsonify({"error": "An unexpected error occurred"}), 500


@app.route('/test-groq', methods=['GET'])
def test_groq():
    """Test endpoint to verify Groq client initialization"""
    try:
        client = get_groq_client()
        return jsonify({
            "status": "success",
            "message": "Groq client initialized successfully"
        })
    except Exception as e:
        return jsonify({
            "status": "error",
            "message": str(e)
        }), 500

# Your other routes remain the same...


if __name__ == '__main__':
    app.debug = True
    app.run()
