import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome, FaCompass, FaEnvelope, FaUser, FaStore, FaPlus, FaMoon, FaSun, FaBell, FaSearch } from 'react-icons/fa';
import CreatePostModal from './CreatePostModal';
import NotificationCenter from './NotificationCenter';
import StoryRow from './StoryRow';

const HeaderWrapper = styled.header`
  background: linear-gradient(135deg, ${props => props.theme.primary}, ${props => props.theme.secondary});
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const TopNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const Logo = styled(Link)`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const FloatingNavBar = styled.div`
  display: flex;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  padding: 0.5rem;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  transform: perspective(1000px) rotateX(5deg);
  transition: all 0.3s ease;

  &:hover {
    transform: perspective(1000px) rotateX(0deg) translateY(-5px);
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: scale(0);
    transition: transform 0.3s ease;
  }

  &:hover::before,
  &.active::before {
    transform: scale(1);
  }

  &:hover {
    transform: translateY(-3px);
  }
`;

const NotificationIcon = styled.div`
  position: relative;
  cursor: pointer;
`;

const NotificationBadge = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: ${props => props.theme.accent};
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: bold;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 0.5rem 1rem;
  flex-grow: 1;
  max-width: 400px;
  margin: 0 1rem;
`;

const SearchInput = styled.input`
  background: none;
  border: none;
  color: white;
  font-size: 1rem;
  outline: none;
  margin-left: 0.5rem;
  width: 100%;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const CreateOptions = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const CreateButton = styled.button`
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
`;

function Header({ toggleTheme, isDarkMode }) {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [createType, setCreateType] = useState(null);
  const [notificationCount, setNotificationCount] = useState(3); // Example count

  const handleCreateClick = (type) => {
    setCreateType(type);
    setShowCreateModal(true);
  };

  return (
    <HeaderWrapper>
      <HeaderContent>
        <TopNav>
          <Logo to="/">Connector</Logo>
          <SearchBar>
            <FaSearch color="white" />
            <SearchInput placeholder="Search..." />
          </SearchBar>
          <FloatingNavBar>
            <NavLink to="/"><FaHome /></NavLink>
            <NavLink to="/explore"><FaCompass /></NavLink>
            <NavLink to="/messages"><FaEnvelope /></NavLink>
            <NavLink to="/marketplace"><FaStore /></NavLink>
            <NavLink to="/profile"><FaUser /></NavLink>
            <NotificationIcon onClick={() => setShowNotifications(!showNotifications)}>
              <NavLink as="div">
                <FaBell />
                {notificationCount > 0 && <NotificationBadge>{notificationCount}</NotificationBadge>}
              </NavLink>
            </NotificationIcon>
            <NavLink as="div" onClick={toggleTheme}>
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </NavLink>
          </FloatingNavBar>
        </TopNav>
        <CreateOptions>
          <CreateButton onClick={() => handleCreateClick('post')}>
            <FaPlus /> Create Post
          </CreateButton>
          <CreateButton onClick={() => handleCreateClick('story')}>
            <FaPlus /> Create Story
          </CreateButton>
          <CreateButton onClick={() => handleCreateClick('video')}>
            <FaPlus /> Create Video
          </CreateButton>
        </CreateOptions>
        <StoryRow />
      </HeaderContent>
      {showCreateModal && (
        <CreatePostModal onClose={() => setShowCreateModal(false)} initialType={createType} />
      )}
      {showNotifications && <NotificationCenter />}
    </HeaderWrapper>
  );
}

export default Header;