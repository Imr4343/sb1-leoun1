import React from 'react';
import styled from 'styled-components';
import Post from './Post';

const FeedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function Feed() {
  const posts = [
    { id: 1, username: 'john_doe', avatar: 'https://picsum.photos/50?random=1', imageUrl: 'https://picsum.photos/600/400?random=1', caption: 'Enjoying a beautiful day!', likes: 1234, comments: 56 },
    { id: 2, username: 'jane_smith', avatar: 'https://picsum.photos/50?random=2', imageUrl: 'https://picsum.photos/600/400?random=2', caption: 'New adventure begins!', likes: 5678, comments: 90 },
    { id: 3, username: 'bob_johnson', avatar: 'https://picsum.photos/50?random=3', imageUrl: 'https://picsum.photos/600/400?random=3', caption: 'Trying out a new recipe', likes: 987, comments: 23 },
  ];

  return (
    <FeedWrapper>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </FeedWrapper>
  );
}

export default Feed;