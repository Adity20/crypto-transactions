import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TransactionList = ({ address }) => {
  const [transactions, setTransactions] = useState([]);
  const [error] = useState(null);

  useEffect(() => {
    
    const fetchTransactions = async () => {
      try {
        const response = await axios.post('https://backend123.up.railway.app/api/transactions', { address });
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    if (address) {
      fetchTransactions();
    }
  }, [address]);

  return (
    <div>
      <h2>Transaction List</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {transactions.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Hash</th>
              <th>From</th>
              <th>To</th>
              <th>Value</th>
              <th>Gas Used</th>
              <th>Gas Price</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.hash}>
                <td>{tx.hash}</td>
                <td>{tx.from}</td>
                <td>{tx.to}</td>
                <td>{tx.value}</td>
                <td>{tx.gasUsed}</td>
                <td>{tx.gasPrice}</td>
                <td>{new Date(tx.timeStamp * 1000).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TransactionList;
