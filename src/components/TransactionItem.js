import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  margin: 10px 0;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Hash = styled.p`
  font-size: 0.9em;
  color: #007bff;
`;

const Amount = styled.p`
  font-size: 1.2em;
  color: #28a745;
`;

const TransactionItem = ({ transaction }) => (
  <Item>
    <Info>
      <Hash>Hash: {transaction.hash}</Hash>
      <p>From: {transaction.from}</p>
      <p>To: {transaction.to}</p>
    </Info>
    <Amount>Value: {transaction.value} ETH</Amount>
  </Item>
);

export default TransactionItem;
