import React from 'react';

const Chatbot = () => {
  const handleMessageClick = () => {
    window.location.href = 'http://localhost:7474/browser/';
  };

  return (
    <div>
      {/* Chatbot messages */}
      <div>Hi! How can I assist you today?</div>

      {/* Link message */}
      <div>
        You can access the Neo4j Browser by clicking <a href="http://localhost:7474/browser/" target="_blank" rel="noopener noreferrer">here</a>.
      </div>

      {/* User input */}
      <input type="text" placeholder="Type your message..." />

      {/* Button to trigger redirect */}
      <button onClick={handleMessageClick}>Go to Neo4j Browser</button>
    </div>
  );
};

export default Chatbot;
