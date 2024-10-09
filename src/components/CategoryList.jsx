import React from 'react';
import styled from 'styled-components';

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

const CategoryButton = styled.button`
  background-color: ${props => props.active ? props.theme.primary : props.theme.card};
  color: ${props => props.active ? 'white' : props.theme.text};
  border: none;
  padding: 5px 15px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.primary};
    color: white;
  }
`;

function CategoryList({ categories, selectedCategory, onSelectCategory }) {
  return (
    <CategoryContainer>
      {categories.map(category => (
        <CategoryButton
          key={category}
          active={category === selectedCategory}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </CategoryButton>
      ))}
    </CategoryContainer>
  );
}

export default CategoryList;