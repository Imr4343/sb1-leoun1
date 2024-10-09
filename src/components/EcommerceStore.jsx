import React, { useState } from 'react';
import ProductList from './ProductList';
import ProductForm from './ProductForm';
import Cart from './Cart';
import './EcommerceStore.css';

const initialProducts = [
  { id: 1, name: 'Smartphone', category: 'Electronics', price: 599.99, image: 'https://via.placeholder.com/150', description: 'Latest model with high-end features.', seller: 'TechGadgets' },
  { id: 2, name: 'Laptop', category: 'Electronics', price: 999.99, image: 'https://via.placeholder.com/150', description: 'Powerful laptop for work and gaming.', seller: 'ComputerWorld' },
  { id: 3, name: 'Headphones', category: 'Electronics', price: 149.99, image: 'https://via.placeholder.com/150', description: 'Noise-cancelling wireless headphones.', seller: 'AudioPhiles' },
  { id: 4, name: 'T-shirt', category: 'Clothing', price: 19.99, image: 'https://via.placeholder.com/150', description: 'Comfortable cotton t-shirt.', seller: 'FashionHub' },
  { id: 5, name: 'Jeans', category: 'Clothing', price: 49.99, image: 'https://via.placeholder.com/150', description: 'Classic blue jeans, perfect fit.', seller: 'DenimCo' },
  { id: 6, name: 'Sneakers', category: 'Footwear', price: 79.99, image: 'https://via.placeholder.com/150', description: 'Lightweight running shoes.', seller: 'SportsGear' },
];

const categories = ['All', 'Electronics', 'Clothing', 'Footwear'];

export default function EcommerceStore() {
  const [products, setProducts] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showProductForm, setShowProductForm] = useState(false);
  const [cart, setCart] = useState([]);

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
    setShowProductForm(false);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <div className="ecommerce-store">
      <h2>Multivendor E-commerce Store</h2>
      <div className="store-actions">
        <button className="action-btn" onClick={() => setShowProductForm(!showProductForm)}>
          {showProductForm ? 'Cancel' : 'Sell a Product'}
        </button>
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </div>
      {showProductForm && <ProductForm addProduct={addProduct} categories={categories.filter(cat => cat !== 'All')} />}
      <div className="category-filter">
        {categories.map(category => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <ProductList products={filteredProducts} addToCart={addToCart} />
    </div>
  );
}