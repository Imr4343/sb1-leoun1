import React from 'react';
import styled from 'styled-components';

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
`;

const ProductCard = styled.div`
  border: 1px solid ${props => props.theme.border};
  border-radius: 5px;
  padding: 1rem;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
`;

function ProductList({ products }) {
  return (
    <ProductGrid>
      {products.map(product => (
        <ProductCard key={product.id}>
          {product.imageUrl && <ProductImage src={product.imageUrl} alt={product.name} />}
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </ProductCard>
      ))}
    </ProductGrid>
  );
}

export default ProductList;