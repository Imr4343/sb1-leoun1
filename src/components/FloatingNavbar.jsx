import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { FaHome, FaCompass, FaEnvelope, FaUser, FaStore, FaRobot, FaMoon, FaSun } from 'react-icons/fa';

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const NavWrapper = styled.nav`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${props => props.theme.card};
  border-radius: 30px;
  padding: 10px;
  display: flex;
  gap: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  animation: ${floatAnimation} 3s ease-in-out infinite;
`;

const StyledNavLink = styled(NavLink)`
  color: ${props => props.theme.text};
  font-size: 1.5rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover, &.active {
    color: ${props => props.theme.primary};
    transform: translateY(-5px);
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${props => props.theme.primary};
    transform: translateY(-5px);
  }
`;

function FloatingNavbar({ toggleTheme, isDarkMode }) {
  return (
    <NavWrapper>
      <StyledNavLink to="/" end><FaHome /></StyledNavLink>
      <StyledNavLink to="/explore"><FaCompass /></StyledNavLink>
      <StyledNavLink to="/messages"><FaEnvelope /></StyledNavLink>
      <StyledNavLink to="/marketplace"><FaStore /></StyledNavLink>
      <StyledNavLink to="/ai-chat"><FaRobot /></StyledNavLink>
      <StyledNavLink to="/profile"><FaUser /></StyledNavLink>
      <ThemeToggle onClick={toggleTheme}>
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </ThemeToggle>
    </NavWrapper>
  );
}

export default FloatingNavbar;