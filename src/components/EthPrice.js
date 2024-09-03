import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const PriceContainer = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  text-align: center;
  margin: 20px 0;
  border-radius: 10px;
`;

const Price = styled.h2`
  color: #007bff;
`;

const EthereumPrice = () => {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr');
        setPrice(response.data.ethereum.inr);
      } catch (error) {
        console.error('Error fetching Ethereum price:', error);
      }
    };

    fetchPrice();
    const interval = setInterval(fetchPrice, 60000); // Refresh every 10 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <PriceContainer>
      <h3>Current Ethereum Price (INR):</h3>
      {price ? <Price>₹{price}</Price> : <p>Loading...</p>}
    </PriceContainer>
  );
};

export default EthereumPrice;
