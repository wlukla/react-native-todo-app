import React from 'react';
import styled from 'styled-components/native';

import Header from '../components/Header';

const TodoScreen = () => {
  return (
    <Container>
      <Main></Main>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #fafafa;
`;

const Main = styled.View`
  padding: 10px;
`;

export default TodoScreen;
