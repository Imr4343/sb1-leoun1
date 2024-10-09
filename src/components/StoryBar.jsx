import React from 'react';
import styled from 'styled-components';

const StoryBarWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 1rem 0;
  margin-bottom: 1rem;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Story = styled.div`
  width: 70px;
  margin-right: 1rem;
  text-align: center;
`;

const StoryAvatar = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(45deg, ${props => props.theme.primary}, ${props => props.theme.secondary});
  padding: 3px;
  margin-bottom: 0.5rem;
`;

const StoryImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${props => props.theme.card};
`;

const StoryUsername = styled.p`
  margin: 0;
  font-size: 0.8rem;
  color: ${props => props.theme.text};
`;

function StoryBar() {
  const stories = [
    { id: 1, username: 'user1', avatar: 'https://picsum.photos/70?random=1' },
    { id: 2, username: 'user2', avatar: 'https://picsum.photos/70?random=2' },
    { id: 3, username: 'user3', avatar: 'https://picsum.photos/70?random=3' },
    { id: 4, username: 'user4', avatar: 'https://picsum.photos/70?random=4' },
    { id: 5, username: 'user5', avatar: 'https://picsum.photos/70?random=5' },
  ];

  return (
    <StoryBarWrapper>
      {stories.map(story => (
        <Story key={story.id}>
          <StoryAvatar>
            <StoryImage src={story.avatar} alt={story.username} />
          </StoryAvatar>
          <StoryUsername>{story.username}</StoryUsername>
        </Story>
      ))}
    </StoryBarWrapper>
  );
}

export default StoryBar;