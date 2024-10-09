import React, { useState } from 'react';
import styled from 'styled-components';

const AIChatWrapper = styled.div`
  max-width: 800px;
  margin: 80px auto 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 160px);
`;

const ChatMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: ${props => props.theme.background};
  border-radius: 10px;
`;

const Message = styled.div`
  max-width: 70%;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background-color: ${props => props.isUser ? props.theme.primary : props.theme.card};
  color: ${props => props.isUser ? 'white' : props.theme.text};
  align-self: ${props => props.isUser ? 'flex-end' : 'flex-start'};
`;

const ChatInput = styled.form`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 20px;
  background-color: ${props => props.theme.card};
  color: ${props => props.theme.text};
`;

const SendButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 20px;
  background-color: ${props => props.theme.primary};
  color: white;
  cursor: pointer;
`;

function AIChat() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! I\'m your AI assistant. How can I help you today?', isUser: false },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: newMessage, isUser: true }]);
      setNewMessage('');
      
      // Simulate AI response
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { 
          id: prevMessages.length + 1, 
          text: `I'm an AI assistant. I don't have real-time responses, but I'm here to simulate a conversation. You said: "${newMessage}"`, 
          isUser: false 
        }]);
      }, 1000);
    }
  };

  return (
    <AIChatWrapper>
      <h2>AI Chat</h2>
      <ChatMessages>
        {messages.map(message => (
          <Message key={message.id} isUser={message.isUser}>
            {message.text}
          </Message>
        ))}
      </ChatMessages>
      <ChatInput onSubmit={handleSubmit}>
        <Input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Ask the AI something..."
        />
        <SendButton type="submit">Send</SendButton>
      </ChatInput>
    </AIChatWrapper>
  );
}

export default AIChat;