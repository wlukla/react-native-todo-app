import React from 'react';
import styled from 'styled-components/native';

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Todo App</Title>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.View`
  background-color: #5c9cf5;
  height: 70px;
  justify-content: flex-end;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
`;

export default Header;
