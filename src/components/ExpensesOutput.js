import React, { useState } from 'react';
import styled from 'styled-components';
import TotalExpenses from './TotalExpenses';
import TransactionList from './Transaction';

const Container = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  margin-top: 20px;
`;

const InputContainer = styled.div`
  margin-bottom: 30px;
`;

const Input = styled.input`
  padding: 10px;
  width: 300px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 1.1em;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1em;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const ExpenseOutput = () => {
  const [address, setAddress] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleClick = () => {
    if (address) {
      setShowResults(true);
    }
  };

  return (
    <Container>
      <InputContainer>
        <Input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter Ethereum Address"
        />
        <Button onClick={handleClick}>Get Details</Button>
      </InputContainer>
      {showResults && (
        <>
          <TotalExpenses address={address} />
          <TransactionList address={address} />
        </>
      )}
    </Container>
  );
};

export default ExpenseOutput;
