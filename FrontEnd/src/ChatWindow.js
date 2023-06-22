import React, { useState, useEffect, useRef } from 'react';
import neo4j from 'neo4j-driver';
import './chatWindow.css';
import logo from './logo.svg';

const uri = 'neo4j://localhost:7687'; // Replace with your Neo4j URI

const driver = neo4j.driver(uri);

const retrieveNameFromDatabase = async () => {
  const session = driver.session();

  try {
    const result = await session.run('MATCH (u:User) WHERE u.username = $username RETURN u.name', {
      username: 'neo4j' // Replace with the actual username
    });

    const record = result.records[0];
    const name = record.get('u.name');

    return name;
  } catch (error) {
    console.log('Error retrieving name from Neo4j:', error);
    return null;
  } finally {
    session.close();
  }
};


const ChatWindow = () => {
  const [userInput, setUserInput] = useState('');
  const [conversation, setConversation] = useState([]);
  const chatContainerRef = useRef(null);
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedConversation = [...conversation, { sender: 'user', message: userInput }];

    try {
      const response = await fetch('http://localhost:5001/get?msg=' + encodeURIComponent(userInput));
      const data = await response.json();
      console.log('API response:', data);
      const updatedBotMessage = { sender: 'bot', message: data.response };
      setConversation([...updatedConversation, updatedBotMessage]);
    } catch (error) {
      console.log('Error:', error);
    }

    setUserInput('');
  };

  useEffect(() => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [conversation]);

  useEffect(() => {
    const getName = async () => {
      const retrievedName = await retrieveNameFromDatabase();
      setName(retrievedName);
    };

    getName();
  }, []);

  useEffect(() => {
    if (name) {
      setConversation([{ sender: 'bot', message: `Hi ${name}! This is Astrochat, how may I help you?` }]);
    }
  }, [name]);

  return (
    <div className="chat-window-container">
      <img className="svg" src={logo} alt="Logo" />
      <div className="chat-container" ref={chatContainerRef} id="chatContainer">
        {conversation.map((message, index) => (
          <div key={index} className={`message-container ${message.sender}-message`}>
            <div className="message-bubble">{message.message}</div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="message-container">
          <input
            type="text"
            value={userInput}
            onChange={(e) => {
              console.log('User input:', e.target.value);
              setUserInput(e.target.value);
            }}
            placeholder="Type your message..."
            required
          />
        </div>
      </form>
    </div>
  );
};
export default ChatWindow;
