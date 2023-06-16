import React, { useState } from 'react';

const ChatWindow = () => {
  const [userInput, setUserInput] = useState('');
  const [botResponse, setBotResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/get?msg=${encodeURIComponent(userInput)}`);
      const data = await response.json();
      setBotResponse(data.response);
    } catch (error) {
      console.log('Error:', error);
    }

    setUserInput('');
  };

  return (
    <div className="container">
      <h1>Chatbot</h1>
      <div className="chat-container" id="chatContainer">
        {/* Render previous messages here */}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="message-container">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your message..."
            required
          />
          <input type="submit" value="Send" />
        </div>
      </form>
      {botResponse && (
        <div className="message-container bot-message">
          <div className="message-bubble">{botResponse}</div>
        </div>
      )}
    </div>
  );
};

export default ChatWindow;
