import React from 'react';
import styled from 'styled-components/native';

import Header from '../components/Header';
import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo';

const TodosScreen = () => {
  return (
    <Container>
      <Header />
      <Main>
        <AddTodo />
        <TodoList />
      </Main>
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

export default TodosScreen;
