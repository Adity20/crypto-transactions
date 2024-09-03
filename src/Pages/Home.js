import React from 'react';
import styled from 'styled-components';
import ExpenseOutput from '../components/ExpensesOutput.js';
import EthereumPrice from '../components/EthPrice.js';

const Container = styled.div`
  padding: 40px;
`;

const Home = () => {
  return (
    <Container>
      <ExpenseOutput />
        <EthereumPrice />
    </Container>
  );
};

export default Home;
