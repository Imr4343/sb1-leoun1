import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const CreateProductWrapper = styled.div`
  max-width: 600px;
  margin: 80px auto 0;
  padding: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem 1rem;
  border: 1px solid ${props => props.theme.border};
  border-radius: 5px;
  background-color: ${props => props.theme.card};
  color: ${props => props.theme.text};
`;

const TextArea = styled.textarea`
  padding: 0.5rem 1rem;
  border: 1px solid ${props => props.theme.border};
  border-radius: 5px;
  background-color: ${props => props.theme.card};
  color: ${props => props.theme.text};
  resize: vertical;
  min-height: 100px;
`;

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  background-color: ${props => props.theme.primary};
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.secondary};
  }
`;

function CreateProduct() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
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
    // Here you would typically send the product data to your backend
    console.log('Product submitted:', product);
    // Navigate back to the marketplace
    navigate('/marketplace');
  };

  return (
    <CreateProductWrapper>
      <h2>Create New Product</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product Name"
          required
        />
        <Input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Price"
          step="0.01"
          min="0"
          required
        />
        <TextArea
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Product Description"
          required
        />
        <Input
          type="url"
          name="image"
          value={product.image}
          onChange={handleChange}
          placeholder="Image URL"
          required
        />
        <SubmitButton type="submit">Create Product</SubmitButton>
      </Form>
    </CreateProductWrapper>
  );
}

export default CreateProduct;