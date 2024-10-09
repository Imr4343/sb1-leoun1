import React from 'react';
import styled from 'styled-components';

const ExploreWrapper = styled.div`
  max-width: 800px;
  margin: 80px auto 0;
  padding: 1rem;
`;

const ExploreGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;

const ExploreItem = styled.div`
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ExploreImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function Explore() {
  const exploreItems = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    imageUrl: `https://picsum.photos/400?random=${i + 1}`,
  }));

  return (
    <ExploreWrapper>
      <h2>Explore</h2>
      <ExploreGrid>
        {exploreItems.map(item => (
          <ExploreItem key={item.id}>
            <ExploreImage src={item.imageUrl} alt={`Explore item ${item.id}`} />
          </ExploreItem>
        ))}
      </ExploreGrid>
    </ExploreWrapper>
  );
}

export default Explore;