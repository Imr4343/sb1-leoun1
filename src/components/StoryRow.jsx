import React from 'react';
import styled from 'styled-components';

const StoryRowWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 1rem 0;
  gap: 1rem;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StoryAvatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  padding: 2px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const StoryImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid white;
`;

const StoryUsername = styled.span`
  color: white;
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;

const stories = [
  { id: 1, username: 'Your Story', image: 'https://via.placeholder.com/60' },
  { id: 2, username: 'john_doe', image: 'https://i.pravatar.cc/60?img=1' },
  { id: 3, username: 'jane_smith', image: 'https://i.pravatar.cc/60?img=2' },
  { id: 4, username: 'alex_wilson', image: 'https://i.pravatar.cc/60?img=3' },
  { id: 5, username: 'emma_brown', image: 'https://i.pravatar.cc/60?img=4' },
  { id: 6, username: 'mike_johnson', image: 'https://i.pravatar.cc/60?img=5' },
];

function StoryRow() {
  return (
    <StoryRowWrapper>
      {stories.map((story) => (
        <StoryItem key={story.id}>
          <StoryAvatar>
            <StoryImage src={story.image} alt={story.username} />
          </StoryAvatar>
          <StoryUsername>{story.username}</StoryUsername>
        </StoryItem>
      ))}
    </StoryRowWrapper>
  );
}

export default StoryRow;