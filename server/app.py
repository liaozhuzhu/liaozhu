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
app.secret_key = 'liaosecretkey'
CORS(app, origins=["http://localhost:3000"])

with open('context.txt', 'r') as file:
    context = file.read()

conversational_memory_length = 10

# Initialize Groq client with API key
client = ChatGroq(
    api_key=os.environ.get("GROQ_API_KEY"),
    model="llama3-70b-8192",
)

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
            # Using context as the system prompt
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
    print("RESPONSE: ", response)
    return response


@app.route('/api/data', methods=['POST'])
def get_data():
    data = request.json  # Get JSON data from request
    user_prompt = data.get("prompt")  # Extract prompt from JSON

    # Generate a response based on the user's prompt
    response = fetchResponse(user_prompt)

    # Return the response as JSON
    return jsonify({"response": response})

@app.route('/api/set_birthday', methods=['POST'])
def set_birthday():
    global context
    context += " Today is Lily's birthday."
    return jsonify({"response": "Birthday set!"})

# Run the server on localhost:8080
if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)
