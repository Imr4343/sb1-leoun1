import React, { useState } from 'react';
import styled from 'styled-components';
import ProductList from '../components/ProductList';
import CreateProduct from '../components/CreateProduct';
import CategoryList from '../components/CategoryList';
import AffiliateLinkGenerator from '../components/AffiliateLinkGenerator';

const MarketplaceWrapper = styled.div`
  max-width: 1200px;
  margin: 80px auto 0;
  padding: 1rem;
`;

const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const ActionButton = styled.button`
  background-color: ${props => props.theme.primary};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

const categories = ['Electronics', 'Clothing', 'Home & Garden', 'Sports', 'Books'];

function Marketplace() {
  const [showCreateProduct, setShowCreateProduct] = useState(false);
  const [showAffiliateTool, setShowAffiliateTool] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const addProduct = (newProduct) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setProducts([...products, { 
        ...newProduct, 
        id: Date.now(),
        imageUrl: reader.result 
      }]);
    };
    if (newProduct.image) {
      reader.readAsDataURL(newProduct.image);
    } else {
      setProducts([...products, { ...newProduct, id: Date.now() }]);
    }
    setShowCreateProduct(false);
  };

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <MarketplaceWrapper>
      <h2>Marketplace</h2>
      <ActionBar>
        <ActionButton onClick={() => setShowCreateProduct(!showCreateProduct)}>
          {showCreateProduct ? 'View Products' : 'Create Product'}
        </ActionButton>
        <ActionButton onClick={() => setShowAffiliateTool(!showAffiliateTool)}>
          {showAffiliateTool ? 'Hide Affiliate Tool' : 'Generate Affiliate Link'}
        </ActionButton>
      </ActionBar>
      {showCreateProduct ? (
        <CreateProduct addProduct={addProduct} categories={categories} />
      ) : showAffiliateTool ? (
        <AffiliateLinkGenerator />
      ) : (
        <>
          <CategoryList 
            categories={['All', ...categories]} 
            selectedCategory={selectedCategory} 
            onSelectCategory={setSelectedCategory}
          />
          <ProductList products={filteredProducts} />
        </>
      )}
    </MarketplaceWrapper>
  );
}

export default Marketplace;