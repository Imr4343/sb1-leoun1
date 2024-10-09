import React, { useState } from 'react';
import './ProductForm.css';

export default function ProductForm({ addProduct, categories }) {
  const [product, setProduct] = useState({
    name: '',
    category: '',
    price: '',
    image: '',
    description: '',
    seller: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({
      ...product,
      price: parseFloat(product.price)
    });
    setProduct({
      name: '',
      category: '',
      price: '',
      image: '',
      description: '',
      seller: ''
    });
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h3>Sell a Product</h3>
      <input
        type="text"
        name="name"
        value={product.name}
        onChange={handleChange}
        placeholder="Product Name"
        required
      />
      <select
        name="category"
        value={product.category}
        onChange={handleChange}
        required
      >
        <option value="">Select Category</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      <input
        type="number"
        name="price"
        value={product.price}
        onChange={handleChange}
        placeholder="Price"
        step="0.01"
        min="0"
        required
      />
      <input
        type="url"
        name="image"
        value={product.image}
        onChange={handleChange}
        placeholder="Image URL"
        required
      />
      <textarea
        name="description"
        value={product.description}
        onChange={handleChange}
        placeholder="Product Description"
        required
      ></textarea>
      <input
        type="text"
        name="seller"
        value={product.seller}
        onChange={handleChange}
        placeholder="Seller Name"
        required
      />
      <button type="submit" className="submit-btn">List Product</button>
    </form>
  );
}