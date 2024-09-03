import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ExpensesContainer = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  margin-top: 20px;
`;

const TotalExpenses = ({ address }) => {
  const [totalExpenses, setTotalExpenses] = useState(null);
  const [currentPrice, setCurrentPrice] = useState(null);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/expenses/${address}`);
        setTotalExpenses(response.data.totalExpenses);
        setCurrentPrice(response.data.currentPrice);
      } catch (error) {
        console.error('Error fetching total expenses:', error);
      }
    };

    fetchExpenses();
  }, [address]);

  return (
    <ExpensesContainer>
    </ExpensesContainer>
  );
};

export default TotalExpenses;
