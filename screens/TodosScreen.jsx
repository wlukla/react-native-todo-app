import React from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';

import Header from '../components/Header';
import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo';

const TodosScreen = ({ todos, navigation }) => {
  return (
    <Container>
      <Main>
        <AddTodo />
        <TodoList todos={todos} navigation={navigation} />
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

const mapStateToProps = (state) => ({
  todos: state.activeTodos.todosList,
});

export default connect(mapStateToProps)(TodosScreen);
