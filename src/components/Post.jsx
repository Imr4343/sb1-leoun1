import React, { useState } from 'react';
import styled from 'styled-components';
import { FaHeart, FaComment, FaShare, FaPlay } from 'react-icons/fa';

const PostWrapper = styled.div`
  background-color: ${props => props.theme.card};
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1rem;
  border: 3px solid ${props => props.theme.primary};
`;

const Username = styled.h3`
  margin: 0;
  color: ${props => props.theme.text};
  font-weight: 600;
`;

const FollowButton = styled.button`
  background-color: ${props => props.isFollowing ? props.theme.secondary : props.theme.primary};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.isFollowing ? props.theme.primary : props.theme.secondary};
  }
`;

const PostContent = styled.div`
  position: relative;
`;

const PostImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;

const Caption = styled.p`
  margin: 1rem;
  color: ${props => props.theme.text};
`;

const PostActions = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  border-top: 1px solid ${props => props.theme.border};
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.text};
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${props => props.theme.primary};
    transform: scale(1.1);
  }

  svg {
    margin-right: 0.5rem;
  }
`;

function Post({ post, isFollowing, onFollow }) {
  const [likes, setLikes] = useState(post.likes);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <PostWrapper>
      <PostHeader>
        <UserInfo>
          <Avatar src={post.avatar} alt={post.username} />
          <Username>{post.username}</Username>
        </UserInfo>
        <FollowButton isFollowing={isFollowing} onClick={onFollow}>
          {isFollowing ? 'Unfollow' : 'Follow'}
        </FollowButton>
      </PostHeader>
      <PostContent>
        {post.type === 'video' ? (
          <VideoOverlay>
            <FaPlay size={48} color="white" />
          </VideoOverlay>
        ) : null}
        <PostImage src={post.imageUrl} alt={post.caption} />
      </PostContent>
      <Caption>{post.caption}</Caption>
      <PostActions>
        <ActionButton onClick={handleLike}>
          <FaHeart color={liked ? '#ff6b6b' : 'inherit'} /> {likes}
        </ActionButton>
        <ActionButton>
          <FaComment /> {post.comments}
        </ActionButton>
        <ActionButton>
          <FaShare />
        </ActionButton>
      </PostActions>
    </PostWrapper>
  );
}

export default Post;