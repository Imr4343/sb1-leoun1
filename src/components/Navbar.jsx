import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome, FaCompass, FaEnvelope, FaUser, FaMoon, FaSun } from 'react-icons/fa';

const Nav = styled.nav`
  background-color: ${props => props.theme.card};
  padding: 0.5rem 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  color: ${props => props.theme.primary};
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.text};
  text-decoration: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.hover};
  }

  svg {
    margin-right: 0.5rem;
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.text};
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.hover};
  }
`;

function Navbar({ toggleTheme, isDarkMode }) {
  return (
    <Nav>
      <NavContent>
        <Logo>Connector</Logo>
        <NavLinks>
          <NavLink to="/"><FaHome /> Home</NavLink>
          <NavLink to="/explore"><FaCompass /> Explore</NavLink>
          <NavLink to="/messages"><FaEnvelope /> Messages</NavLink>
          <NavLink to="/profile"><FaUser /> Profile</NavLink>
        </NavLinks>
        <ThemeToggle onClick={toggleTheme}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </ThemeToggle>
      </NavContent>
    </Nav>
  );
}

export default Navbar;