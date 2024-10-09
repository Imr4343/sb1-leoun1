import React, { useState, useEffect, useRef } from 'react';
import './ChatRoom.css';

export default function ChatRoom() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello!', sender: 'other' },
    { id: 2, text: 'Hi there!', sender: 'user' },
    { id: 3, text: 'How are you?', sender: 'other' },
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
  };

  return (
    <div className="chat-room">
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
          placeholder="Type a message"
          className="message-input"
        />
        <button type="submit" className="send-button">Send</button>
      </form>
    </div>
  );
}