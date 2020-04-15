import React from 'react';
import styled from 'styled-components/native';

const TodoScreen = () => {
  return (
    <Container>
      <Main>
        <TodoTitle value={'Some todo'} />
        <TodoDescription
          value={
            'Very long multiline description of current todo. Very long multiline description of current todo'
          }
          multiline
          numberOfLines={4}
        />
      </Main>
    </Container>
  );
};

const TodoTitle = styled.TextInput`
  padding: 20px 10px 14px;
  font-size: 30px;
  font-weight: bold;
  border-color: #cecece;
  border-bottom-width: 2px;
`;

const TodoDescription = styled.TextInput`
  padding: 20px 10px 14px;
  color: #484848;
  font-size: 16px;
`;

const Container = styled.View`
  flex: 1;
  background-color: #fafafa;
`;

const Main = styled.View`
  padding: 10px;
`;

export default TodoScreen;
