import React, { useState } from 'react';
import styled from 'styled-components';
import Post from '../components/Post';
import StoryBar from '../components/StoryBar';
import CreatePostModal from '../components/CreatePostModal';
import { FaPlus } from 'react-icons/fa';

const HomeWrapper = styled.div`
  max-width: 1200px;
  margin: 80px auto 0;
  padding: 1rem;
`;

const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const CreateButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: ${props => props.theme.primary};
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const FilterBar = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const FilterButton = styled.button`
  background-color: ${props => props.active ? props.theme.primary : 'transparent'};
  color: ${props => props.active ? 'white' : props.theme.text};
  border: 1px solid ${props => props.theme.primary};
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.primary};
    color: white;
  }
`;

const posts = [
  {
    id: 1,
    username: 'johndoe',
    avatar: 'https://i.pravatar.cc/150?img=1',
    imageUrl: 'https://picsum.photos/600/800?random=1',
    caption: 'Enjoying a beautiful day!',
    likes: 1234,
    comments: 56,
    type: 'image'
  },
  {
    id: 2,
    username: 'janedoe',
    avatar: 'https://i.pravatar.cc/150?img=2',
    imageUrl: 'https://picsum.photos/600/400?random=2',
    caption: 'Just finished my latest project!',
    likes: 987,
    comments: 43,
    type: 'video'
  },
  // Add more posts here with different types (image, video, text)
];

function Home() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [followedUsers, setFollowedUsers] = useState(new Set());
  const [filter, setFilter] = useState('all');

  const handleFollow = (username) => {
    setFollowedUsers(prev => {
      const newSet = new Set(prev);
      if (newSet.has(username)) {
        newSet.delete(username);
      } else {
        newSet.add(username);
      }
      return newSet;
    });
  };

  const filteredPosts = posts.filter(post => {
    if (filter === 'all') return true;
    return post.type === filter;
  });

  return (
    <HomeWrapper>
      <StoryBar />
      <FilterBar>
        <FilterButton active={filter === 'all'} onClick={() => setFilter('all')}>All</FilterButton>
        <FilterButton active={filter === 'image'} onClick={() => setFilter('image')}>Images</FilterButton>
        <FilterButton active={filter === 'video'} onClick={() => setFilter('video')}>Videos</FilterButton>
        <FilterButton active={filter === 'text'} onClick={() => setFilter('text')}>Text</FilterButton>
      </FilterBar>
      <PostGrid>
        {filteredPosts.map(post => (
          <Post 
            key={post.id} 
            post={post} 
            isFollowing={followedUsers.has(post.username)}
            onFollow={() => handleFollow(post.username)}
          />
        ))}
      </PostGrid>
      <CreateButton onClick={() => setShowCreateModal(true)}>
        <FaPlus />
      </CreateButton>
      {showCreateModal && (
        <CreatePostModal onClose={() => setShowCreateModal(false)} />
      )}
    </HomeWrapper>
  );
}

export default Home;