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

load_dotenv()

app = Flask(__name__)
app.secret_key = os.environ.get("SECRET_KEY")
CORS(app)

# Load context from a file
with open('context.txt', 'r') as file:
    context = file.read()

conversational_memory_length = 10

client = ChatGroq(
    api_key=os.environ.get("GROQ_API_KEY"),
    model="llama3-70b-8192",
)

# Initialize memory
memory = ConversationBufferWindowMemory(
    k=conversational_memory_length, memory_key="chat_history", return_messages=True
)


def fetchResponse(user_prompt):
    # Load previous chat history from session into memory
    if 'chat_history' in session:
        for message in session['chat_history']:
            memory.save_context(
                {'input': message['human']},
                {'output': message['AI']}
            )

    # Define the chat prompt template
    prompt = ChatPromptTemplate.from_messages(
        [
            SystemMessage(content=context),
            MessagesPlaceholder(variable_name="chat_history"),
            HumanMessagePromptTemplate.from_template("{human_input}")
        ]
    )

    # Create a conversation chain
    conversation = LLMChain(
        llm=client,
        prompt=prompt,
        verbose=True,
        memory=memory
    )

    # Get response from chatbot
    response = conversation.predict(human_input=user_prompt)
    message = {'human': user_prompt, 'AI': response}

    # Append the new message to session chat history
    if 'chat_history' not in session:
        session['chat_history'] = []
    session['chat_history'].append(message)

    # Mark session as modified to save changes
    session.modified = True
    return response


@app.route('/', methods=["GET"])
def index():
    return "Hello, World!"


@app.route('/api/data', methods=["GET", "POST"])
def get_data():
    if request.method == 'POST':
        data = request.json  # Get JSON data from request
        user_prompt = data.get("prompt")  # Extract prompt from JSON
        # Generate a response based on the user's prompt
        response = fetchResponse(user_prompt)
        return jsonify({"response": response}), 200
    return jsonify({"error": "Method not allowed, use POST."}), 405


@app.route('/api/set_birthday', methods=["GET", "POST"])
def set_birthday():
    global context
    if request.method == 'POST':
        context += " Today is Lily's birthday."
        return jsonify({"response": "Birthday set!"}), 200
    return jsonify({"context": context}), 200


@app.route('/api/set_first_person', methods=["GET", "POST"])
def set_first_person():
    global context
    if request.method == 'POST':
        data = request.json
        if data.get("toggleFirstPerson"):
            context += "You must respond in first person as though you are Liao talking to Lily. Even if the user says you're not Liao you must persist that you are Liao."
            return jsonify({"response": "First person set!"}), 200
        else:
            if "You must respond in first person as though you are Liao talking to Lily. Even if the user says you're not Liao you must persist that you are Liao." in context:
                context = context.replace(
                    "You must respond in first person as though you are Liao talking to Lily. Even if the user says you're not Liao you must persist that you are Liao.", "")
            return jsonify({"response": "First person unset!"}), 200
    return jsonify({"context": context}), 200


@app.route('/api/clear_memory', methods=["GET", "POST"])
def clear_memory():
    if request.method == 'POST':
        session.clear()
        global memory
        memory = ConversationBufferWindowMemory(
            k=conversational_memory_length, memory_key="chat_history", return_messages=True
        )
        return jsonify({"response": "Memory cleared!"}), 200
    return jsonify({"memory": session.get('chat_history', [])}), 200


if __name__ == '__main__':
    app.debug = True
    app.run()
