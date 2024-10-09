import React from 'react';
import styled from 'styled-components';

const ProfileWrapper = styled.div`
  max-width: 800px;
  margin: 80px auto 0;
  padding: 1rem;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 2rem;
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const Username = styled.h2`
  margin: 0 0 0.5rem;
  color: ${props => props.theme.text};
`;

const Stats = styled.div`
  display: flex;
  gap: 1rem;
`;

const Stat = styled.div`
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${props => props.theme.text};
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: ${props => props.theme.text};
  opacity: 0.7;
`;

const ProfileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

const ProfilePost = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 10px;
`;

function Profile() {
  const profileData = {
    username: 'johndoe',
    avatar: 'https://picsum.photos/100?random=1',
    posts: 42,
    followers: 1234,
    following: 567,
  };

  const userPosts = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    imageUrl: `https://picsum.photos/300?random=${i + 1}`,
  }));

  return (
    <ProfileWrapper>
      <ProfileHeader>
        <Avatar src={profileData.avatar} alt={profileData.username} />
        <ProfileInfo>
          <Username>{profileData.username}</Username>
          <Stats>
            <Stat>
              <StatValue>{profileData.posts}</StatValue>
              <StatLabel>Posts</StatLabel>
            </Stat>
            <Stat>
              <StatValue>{profileData.followers}</StatValue>
              <StatLabel>Followers</StatLabel>
            </Stat>
            <Stat>
              <StatValue>{profileData.following}</StatValue>
              <StatLabel>Following</StatLabel>
            </Stat>
          </Stats>
        </ProfileInfo>
      </ProfileHeader>
      <ProfileGrid>
        {userPosts.map(post => (
          <ProfilePost key={post.id} src={post.imageUrl} alt={`Post ${post.id}`} />
        ))}
      </ProfileGrid>
    </ProfileWrapper>
  );
}

export default Profile;