import React from 'react';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';

const FAB = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${props => props.theme.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }
`;

function FloatingActionButton() {
  return (
    <FAB>
      <FaPlus />
    </FAB>
  );
}

export default FloatingActionButton;