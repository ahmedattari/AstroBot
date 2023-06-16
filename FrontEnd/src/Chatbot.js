import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const userInputRef = useRef(null);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [messages]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userInput = userInputRef.current.value.trim();

    if (userInput !== '') {
      const userMessage = { content: userInput, sender: 'user' };
      const botMessage = {
        content: `Bot response: Your message is ${userInput.length} characters long.`,
        sender: 'bot',
      };

      setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);
      userInputRef.current.value = '';
    }
  };

  return (
    <div className="container">
      <h1>Chatbot</h1>
      <div className="chat-container" ref={chatContainerRef}>
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}-message`}>
            {message.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} id="chatForm">
        <input type="text" id="userInput" ref={userInputRef} placeholder="Type your message..." required />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Chatbot;
