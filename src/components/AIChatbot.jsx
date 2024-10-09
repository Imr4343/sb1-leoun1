import React, { useState, useEffect, useRef } from 'react';
import './ChatRoom.css';

export default function AIChatbot() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! I\'m your AI assistant. How can I help you today?', sender: 'ai' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;
    setMessages([...messages, { id: messages.length + 1, text: newMessage, sender: 'user' }]);
    setNewMessage('');
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prevMessages => [...prevMessages, { 
        id: prevMessages.length + 1, 
        text: `I'm an AI assistant. I don't have real-time responses, but I'm here to simulate a conversation. You said: "${newMessage}"`, 
        sender: 'ai' 
      }]);
    }, 1000);
  };

  return (
    <div className="chat-room">
      <h2>AI Chatbot</h2>
      <div className="chat-container">
        {messages.map(msg => (
          <div 
            key={msg.id} 
            className={`chat-bubble ${msg.sender === 'user' ? 'chat-bubble-sent' : 'chat-bubble-received'}`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="message-form">
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Ask the AI something..."
          className="message-input"
        />
        <button type="submit" className="send-button">Send</button>
      </form>
    </div>
  );
}