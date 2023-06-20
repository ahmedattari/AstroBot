from flask import Flask, request, jsonify
import aiml
from autocorrect import spell
import os
from flask_cors import CORS
import nltk
from nltk.tokenize import word_tokenize
import requests
from bs4 import BeautifulSoup

# Download necessary NLTK resources
nltk.download('punkt')

app = Flask(__name__)
CORS(app)

BRAIN_FILE = "/home/shockblade/Documents/Attari/Chatbot/FrontEnd/chatbot-file/pretrained_model/aiml_pretrained_model.dump"
k = aiml.Kernel()

if os.path.exists(BRAIN_FILE):
    print("Loading from brain file: " + BRAIN_FILE)
    k.loadBrain(BRAIN_FILE)
else:
    print("Parsing aiml files")
    k.bootstrap(learnFiles="chatbot-file/pretrained_model/learningFileList.aiml", commands="load aiml")
    print("Saving brain file: " + BRAIN_FILE)
    k.saveBrain(BRAIN_FILE)


def scrape_website():
    # Specify the URL of the website you want to scrape
    url = "https://www.google.com"

    try:
        # Send a GET request to the website URL
        response = requests.get(url)

        # Check if the request was successful (status code 200)
        if response.status_code == 200:
            # Return the scraped HTML content as a response
            return f"Web scraping result:\n{response.content.decode('utf-8')}"
        else:
            return "Sorry, I couldn't retrieve the information from the website."
    except requests.exceptions.RequestException as e:
        return f"An error occurred: {e}" 


@app.route('/get', methods=['GET'])
def get_response():
    user_input = request.args.get('msg')
    user_input = word_tokenize(user_input)  # Tokenize the user input using NLTK
    user_input = [spell(w) for w in user_input]
    question = " ".join(user_input)
    response = k.respond(question)

    if response == '':
        # Bot could not provide an answer, fallback to web scraping
        response = scrape_website()

    return jsonify({'response': response})


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
