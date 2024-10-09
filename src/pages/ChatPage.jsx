import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const ChatWrapper = styled.div`
  max-width: 800px;
  margin: 80px auto 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 160px);
`;

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 1rem;
`;

const Username = styled.h2`
  margin: 0;
  color: ${props => props.theme.text};
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
  background-color: ${props => props.isSent ? props.theme.primary : props.theme.card};
  color: ${props => props.isSent ? 'white' : props.theme.text};
  align-self: ${props => props.isSent ? 'flex-end' : 'flex-start'};
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

function ChatPage() {
  const { id } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Simulated chat data
    setMessages([
      { id: 1, text: 'Hey there!', isSent: false },
      { id: 2, text: 'Hi! How are you?', isSent: true },
      { id: 3, text: 'I\'m good, thanks for asking. How about you?', isSent: false },
    ]);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: newMessage, isSent: true }]);
      setNewMessage('');
    }
  };

  return (
    <ChatWrapper>
      <ChatHeader>
        <Avatar src={`https://picsum.photos/50?random=${id}`} alt="User Avatar" />
        <Username>User {id}</Username>
      </ChatHeader>
      <ChatMessages>
        {messages.map(message => (
          <Message key={message.id} isSent={message.isSent}>
            {message.text}
          </Message>
        ))}
      </ChatMessages>
      <ChatInput onSubmit={handleSubmit}>
        <Input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <SendButton type="submit">Send</SendButton>
      </ChatInput>
    </ChatWrapper>
  );
}

export default ChatPage;