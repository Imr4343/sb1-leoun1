import React, { useState } from 'react';
import styled from 'styled-components';

const AffiliateWrapper = styled.div`
  background-color: ${props => props.theme.card};
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid ${props => props.theme.border};
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: ${props => props.theme.primary};
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const Result = styled.div`
  margin-top: 20px;
  padding: 10px;
  background-color: ${props => props.theme.background};
  border: 1px solid ${props => props.theme.border};
  border-radius: 5px;
`;

function AffiliateLinkGenerator() {
  const [productUrl, setProductUrl] = useState('');
  const [affiliateId, setAffiliateId] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // This is a simple example. In a real application, you'd want to use a more robust method
    // to generate affiliate links, possibly involving a backend service.
    const affiliateLink = `${productUrl}?ref=${affiliateId}`;
    setGeneratedLink(affiliateLink);
  };

  return (
    <AffiliateWrapper>
      <h3>Generate Affiliate Link</h3>
      <Form onSubmit={handleSubmit}>
        <Input
          type="url"
          placeholder="Product URL"
          value={productUrl}
          onChange={(e) => setProductUrl(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Your Affiliate ID"
          value={affiliateId}
          onChange={(e) => setAffiliateId(e.target.value)}
          required
        />
        <Button type="submit">Generate Link</Button>
      </Form>
      {generatedLink && (
        <Result>
          <strong>Your Affiliate Link:</strong>
          <p>{generatedLink}</p>
        </Result>
      )}
    </AffiliateWrapper>
  );
}

export default AffiliateLinkGenerator;