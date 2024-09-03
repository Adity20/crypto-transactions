import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #282c34;
  padding: 20px;
  text-align: center;
  color: white;
`;

const Title = styled.h1`
  font-size: 2.5em;
`;

const Header = () => (
  <HeaderContainer>
    <Title>Crypto Transaction Tracker</Title>
  </HeaderContainer>
);

export default Header;
