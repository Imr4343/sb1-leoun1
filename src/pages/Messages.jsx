import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaPaperPlane, FaSmile, FaPaperclip } from 'react-icons/fa';

const MessagesWrapper = styled.div`
  max-width: 1200px;
  margin: 80px auto 0;
  padding: 1rem;
  display: flex;
  height: calc(100vh - 80px);
`;

const ContactList = styled.div`
  width: 300px;
  border-right: 1px solid ${props => props.theme.border};
  overflow-y: auto;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.hover};
  }
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1rem;
`;

const ChatArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ChatHeader = styled.div`
  padding: 1rem;
  border-bottom: 1px solid ${props => props.theme.border};
`;

const ChatMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
`;

const Message = styled.div`
  max-width: 70%;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  border-radius: 20px;
  background-color: ${props => props.isUser ? props.theme.primary : props.theme.card};
  color: ${props => props.isUser ? 'white' : props.theme.text};
  align-self: ${props => props.isUser ? 'flex-end' : 'flex-start'};
`;

const ChatInput = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-top: 1px solid ${props => props.theme.border};
`;

const Input = styled.input`
  flex: 1;
  padding: 0.5rem;
  border: none;
  border-radius: 20px;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
`;

const SendButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.primary};
  font-size: 1.5rem;
  cursor: pointer;
  margin-left: 1rem;
`;

function Messages() {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Simulated contacts data
    setContacts([
      { id: 1, name: 'John Doe', avatar: 'https://i.pravatar.cc/150?img=1' },
      { id: 2, name: 'Jane Smith', avatar: 'https://i.pravatar.cc/150?img=2' },
      { id: 3, name: 'Bob Johnson', avatar: 'https://i.pravatar.cc/150?img=3' },
    ]);
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;
    setMessages([...messages, { id: messages.length + 1, text: newMessage, isUser: true }]);
    setNewMessage('');
  };

  return (
    <MessagesWrapper>
      <ContactList>
        {contacts.map(contact => (
          <ContactItem key={contact.id} onClick={() => setSelectedContact(contact)}>
            <Avatar src={contact.avatar} alt={contact.name} />
            <span>{contact.name}</span>
          </ContactItem>
        ))}
      </ContactList>
      <ChatArea>
        {selectedContact ? (
          <>
            <ChatHeader>
              <h3>{selectedContact.name}</h3>
            </ChatHeader>
            <ChatMessages>
              {messages.map(message => (
                <Message key={message.id} isUser={message.isUser}>
                  {message.text}
                </Message>
              ))}
            </ChatMessages>
            <ChatInput>
              <FaSmile style={{ marginRight: '0.5rem', cursor: 'pointer' }} />
              <FaPaperclip style={{ marginRight: '0.5rem', cursor: 'pointer' }} />
              <Input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
              />
              <SendButton onClick={handleSendMessage}>
                <FaPaperPlane />
              </SendButton>
            </ChatInput>
          </>
        ) : (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <p>Select a contact to start chatting</p>
          </div>
        )}
      </ChatArea>
    </MessagesWrapper>
  );
}

export default Messages;