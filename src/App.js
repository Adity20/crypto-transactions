import React from 'react';
import Header from './components/Header';
import Home from './Pages/Home';
import styled from 'styled-components';

const AppContainer = styled.div`
  text-align: center;
  background-color: #f0f2f5;
  min-height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Home />
    </AppContainer>
  );
}

export default App;
