import React, { useState } from 'react';
import styled from 'styled-components';
import { FaTimes, FaImage, FaVideo, FaBookOpen } from 'react-icons/fa';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: ${props => props.theme.card};
  padding: 2rem;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${props => props.theme.text};
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
`;

const Tab = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  color: ${props => props.active ? props.theme.primary : props.theme.text};
  padding: 0.5rem 1rem;
  border-bottom: 2px solid ${props => props.active ? props.theme.primary : 'transparent'};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid ${props => props.theme.border};
  border-radius: 5px;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid ${props => props.theme.border};
  border-radius: 5px;
  resize: vertical;
  min-height: 100px;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
`;

const SubmitButton = styled.button`
  background-color: ${props => props.theme.primary};
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.secondary};
  }
`;

function CreatePostModal({ onClose, initialType = 'post' }) {
  const [activeTab, setActiveTab] = useState(initialType);
  const [content, setContent] = useState('');
  const [media, setMedia] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle post creation logic here
    console.log('Creating', activeTab, 'with content:', content, 'and media:', media);
    onClose();
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}><FaTimes /></CloseButton>
        <TabContainer>
          <Tab active={activeTab === 'post'} onClick={() => setActiveTab('post')}>
            <FaImage /> Post
          </Tab>
          <Tab active={activeTab === 'story'} onClick={() => setActiveTab('story')}>
            <FaBookOpen /> Story
          </Tab>
          <Tab active={activeTab === 'video'} onClick={() => setActiveTab('video')}>
            <FaVideo /> Video
          </Tab>
        </TabContainer>
        <Form onSubmit={handleSubmit}>
          <TextArea 
            placeholder={`What's on your mind? Create a ${activeTab}...`}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Input 
            type="file" 
            accept={activeTab === 'video' ? 'video/*' : 'image/*'}
            onChange={(e) => setMedia(e.target.files[0])}
          />
          <SubmitButton type="submit">Create {activeTab}</SubmitButton>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
}

export default CreatePostModal;