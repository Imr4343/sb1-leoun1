import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid ${props => props.theme.border};
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid ${props => props.theme.border};
  border-radius: 5px;
  resize: vertical;
`;

const Button = styled.button`
  background-color: ${props => props.theme.primary};
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
`;

function CreateProduct({ addProduct }) {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    image: null,
  });

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setProduct({ ...product, image: e.target.files[0] });
    } else {
      setProduct({ ...product, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in product) {
      formData.append(key, product[key]);
    }
    addProduct(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        placeholder="Product Name"
        value={product.name}
        onChange={handleChange}
        required
      />
      <TextArea
        name="description"
        placeholder="Product Description"
        value={product.description}
        onChange={handleChange}
        required
      />
      <Input
        type="number"
        name="price"
        placeholder="Price"
        value={product.price}
        onChange={handleChange}
        required
      />
      <Input
        type="file"
        name="image"
        onChange={handleChange}
        accept="image/*"
        required
      />
      <Button type="submit">Create Product</Button>
    </Form>
  );
}

export default CreateProduct;