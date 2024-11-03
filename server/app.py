from flask import Flask, jsonify, request
from groq import Groq
from dotenv import load_dotenv
import os
from flask_cors import CORS

app = Flask(__name__)

# Allow CORS for requests from http://localhost:3000
CORS(app, origins=["http://localhost:3000"])

client = Groq()

def fetchResponse(prompt):
    completion = client.chat.completions.create(
        model="llama3-70b-8192",
        messages=[
            {
                "role": "user",
                "content": "hello"
            },
            {
                "role": "assistant",
                "content": "Hello! It's nice to meet you. Is there something I can help you with, or would you like to chat?"
            }
        ],
        temperature=1,
        max_tokens=1024,
        top_p=1,
        stream=True,
        stop=None,
    )

    for chunk in completion:
        print(chunk.choices[0].delta.content or "", end="")

# Home route
@app.route('/')
def home():
    return "Welcome to the Flask server!"

# Example route for handling GET requests
@app.route('/api/data', methods=['GET'])
def get_data():
    # data = {
    #     "message": "Hello, world!",
    #     "status": "success"
    # }
    # return jsonify(data)
    data = request.json
    return data

# Example route for handling POST requests
@app.route('/api/data', methods=['POST'])
def post_data():
    # Get JSON data from the request
    data = request.get_json()
    response = {
        "message": "Data received!",
        "received_data": data
    }
    return jsonify(response), 201

# Run the server on localhost:8080
if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)
