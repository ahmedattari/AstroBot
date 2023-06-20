Created Date: 18 Nov 2018

## INSTALLATION:
<br> `pip install -r requirements.txt`
<br><br>
Python EXECUTION: Run `conversation.py` to run the bot<br>
Web api EXECUTION: Run `bot.py`, once it runs, open the link and start chatting with the bot... <br>

## DEMO

# AstroChat using AIML

As said in Wikipedia, AIML [Artificial Intelligence Markup Language] is an XML dialect for creating natural language software agents.

These days as you can see that Chatbots are in high trend when it comes to Artificial Intelligence. As most of the organizations have already started implementing chatbots on their sites especially on e-commerce websites. 

Some of the best examples of chatbots are:
1. Alexa
2. Dialogflow
3. Cleverbot

So you want to build a chatbot? No worries! 

We will be using AIML because to build a chatbot using NLP/ML/Deep Learning takes a lot of time to build while AIML helps to build a chatbot easily but the only problem is that you need to feed as many data as you can for the bot to learn and here data doesn't just mean the questions and its category but also the question pattern.

To understand about AIML coding structure, refer to the previous article published: AIML TUTORIAL
Hope you know from the previous articles what each tag denotes and how to get started. 

Here you will need 2 files:

1 Python file: api.py<br>
2 aiml file: learningFileList.aiml<br>



##### learningFilesList.aiml
code to load the files to train

##### data folder
Data folder contains all the AIML files<br>
Each aiml file contains the conversation patterns which the kernel will load for chatting

Note: Kernel object is the public interface to the AIML interpreter. "learn" method loads the contents of an AIML file into the kernel. While "respond" method is used to get the response from the learned AIML file. And "LEARN AIML" is the pattern that k.respond from api.py calls. The <learn> tag loads the AIML file to respond.


easy wasn't it? Add more to categories to the conversation.aiml so that your bot can answer to any questions! You can also make your chatbot to any domain specific like hotel booking, food ordering, flight booking,etc.

Try it out and let me know how it goes 😍
