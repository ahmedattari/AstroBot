# AstroBot
Astrobot: Discover the universe, NASA projects, stars, and planets with this intelligent chatbot.

<a name="br1"></a> 

**Name: Ahmed Raza Attari**

**S-ID: F2021376017**

**INSTALLATION:**

1\. Importing Dependencies:

Flask: A micro web framework for creating the chatbot API.

aiml: A Python library for creating and parsing AIML ﬁles, used for chatbot responses.

autocorrect: A library for autocorrecting words.

os: A module for interacting with the operating system.

flask\_cors: A Flask extension for handling Cross-Origin Resource Sharing (CORS).

nltk: The Natural Language Toolkit library.

requests: A library for making HTTP requests.

bs4 (BeautifulSoup): A library for parsing HTML and XML.

2\. Downloading NLTK Resources:

nltk.download('punkt'): Downloads the necessary resources for tokenization using NLTK.

nltk.download('wordnet'): Downloads WordNet, a lexical database for English.

3\. Initializing Flask and CORS:

app = Flask(\_\_name\_\_): Creates a Flask application.

CORS(app): Enables CORS for the Flask application.

4\. Loading AIML Kernel:

BRAIN\_FILE: The ﬁle path for the AIML kernel brain dump.

Checking if the brain ﬁle exists and loading it if it does. Otherwise ,parsing AIML ﬁles and saving the brain ﬁle.

5\. Website Scraping Function:

<a name="br2"></a> 

scrape\_website(): Scrapes the speciﬁed URL and returns the scraped

HTML content.

6\. API Endpoint:/get with GET method: Handles the API endpoint for receiving user input and returning chatbot responses.

user\_input: Retrieves the user input from the request's query parameters.

Tokenizes the user input using NLTK, applies autocorrection to each token ,and joins them back into a sentence.

WordNet Synonym Replacement: Iterates over each token in the user input, ﬁnds synonyms using WordNet, and updates the question with joined synonyms if any are found.

Passes the updated question to the AIML kernel to get the chatbot's response.If the response is empty, it falls back to web scraping.

Returns the chatbot's response as a JSON object.

7\. Running the Application:

if \_\_name\_\_ == '\_\_main\_\_':: Checks if the script is being run directly.

app.run(host='0.0.0.0', port=5001): Starts the Flask application on

the speciﬁed host and port.

2



<a name="br3"></a> 

**DEMO**

3



<a name="br4"></a> 

**Chatbot Frontend**

This project implements a chatbot frontend using React and integrates it with a Flask API for handling chatbot interactions.

**Project Structure**

The project structure is as follows:

1\. frontend/: Contains the React frontend code.

2\. src/: Contains the React components and application logic.

3\. LoginForm.js: Component for the login form.

4\. ChatWindow.js: Component for the chat window.

5\. App.js: Main application component that handles routing.

6\. public/: Contains the public files such as index.html.

7\. package.json: Contains the dependencies and build scripts for the

frontend.

8\. backend/: Contains the Flask API code.

9\. app.py: Flask application file that handles the API endpoints and

interactions with the chatbot.

10\.README.md: This README file.

**Setup and Installation**

4



<a name="br5"></a> 

**Frontend Setup**

11\.Navigate to the frontend/ directory:

12\.bash

13\.Copy code

14\.cd frontend/

15\.Install the dependencies:

16\.Copy code

17\.npm install

**Backend Setup**

18\.Navigate to the backend/ directory:

19\.bash

20\.Copy code

21\.cd backend/

22\.Create a virtual environment (optional but recommended):

23\.bash

24\.Copy code

25\.python3 -m venv env source env/bin/activate

26\.Install the dependencies:

27\.Copy code

28\.pip install -r requirements.txt

5



<a name="br6"></a> 

**Usage**

**Running the Frontend**

29\.Start the frontend development server:

30\.bash

31\.Copy code

32\.cd frontend/ npm start

33\.The frontend will be accessible at http://localhost:3000.

**Running the Backend**

1\. Start the Flask backend server:

2\. bash

3\. Copy code

4\. cd backend/ python app.py

5\. The backend API will be accessible at http://localhost:5000.

**Integration**

To integrate the frontend with the backend:

1\. In App.js, update the API endpoint URLs to match your backend

server address.

● Example: const API\_URL = 'http://localhost:5000';

2\. Customize the frontend components (LoginForm.js,

ChatWindow.js) to match your desired chatbot UI and

functionality.

3\. Build the frontend for production:

6



<a name="br7"></a> 

4\. arduino

5\. Copy code

6\. cd frontend/ npm run build

7\. Deploy the built frontend files (located in the frontend/build/

directory) to a web server or any suitable hosting platform.

8\. Deploy the backend Flask API to a suitable server or platform.

9\. Access the deployed frontend and start using the chatbot!

**neo4j for Login Page:**

As soon as user enter the username and password:

If you are using Linux so linux does not support the Neo4j desktop for the

server and

const driver = neo4j.driver('bolt://localhost:7474',

neo4j.auth.basic('neo4j', 'password'));

const session = driver.session();

const result = await session.run(

'CREATE (n:User {username: $username, password: $password}) RETURN

count(n) AS nodeCount',

{ username, password }

);

7



<a name="br8"></a> 

This function is help to create a node and if node is not create the

exceptional is created:

const nodeCount = result.records[0].get('nodeCount');

console.log('Nodes created:', nodeCount);

setUsername('');

setPassword('');

} catch (error) {

console.error('Error creating node:', error);

} finally {

session.close();

driver.close();

}

To run this Chatbot after initialization of neo4j server and api.py file

We have to start the npm so that it will show on browser localhost:port



<a name="br9"></a> 

Web Scraping

I use Web Scraping using

from bs4 import BeautifulSoup

def scrape\_website():

\# Specify the URL of the website you want to scrape

url = "https://www.google.com"

try:

\# Send a GET request to the website URL

response = requests.get(url)

\# Check if the request was successful (status code 200)

if response.status\_code == 200:

\# Return the scraped HTML content as a response

return f"Web scraping

result:\n{response.content.decode('utf-8')}"

else:

return "Sorry, I couldn't retrieve the information from the

website."

except requests.exceptions.RequestException as e:

return f"An error occurred: {e}"

This function execute the when chatbot is out the answer and could not

find anything or redirect to other question so it will search the the query

on the web in this case it uses the Google url

@app.route('/get', methods=['GET'])

def get\_response():

user\_input = request.args.get('msg')

9



<a name="br10"></a> 

user\_input = word\_tokenize(user\_input) # Tokenize the user input using

NLTK

user\_input = [spell(w) for w in user\_input]

question = " ".join(user\_input)

response = k.respond(question)

if response == '':

\# Bot could not provide an answer, fallback to web scraping

response = scrape\_website()

return jsonify({'response': response})

This function is take a query of a user using get method and push it on

the front end using json

BRAIN\_FILE =

"/home/shockblade/Documents/Attari/Chatbot/FrontEnd/chatbot-file/pretraine

d\_model/aiml\_pretrained\_model.dump"

k = aiml.Kernel()

if os.path.exists(BRAIN\_FILE):

print("Loading from brain file: " + BRAIN\_FILE)

k.loadBrain(BRAIN\_FILE)

else:

print("Parsing aiml files")

k.bootstrap(learnFiles="chatbot-file/pretrained\_model/learningFileList.aim

l", commands="load aiml")

print("Saving brain file: " + BRAIN\_FILE)

k.saveBrain(BRAIN\_FILE)

10



<a name="br11"></a> 

This brain file help the bot to memories the name and the current user

related thing which comes handy for be in the context of the chat with

the bot.

BRAIN\_FILE: The file path for the AIML kernel brain dump.

● Checking if the brain file exists and loading it if it does.

Otherwise, parsing AIML files and saving the brain file.

Try it out and let me know how it goes

11

