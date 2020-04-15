import React from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';

import Header from '../components/Header';
import TodoList from '../components/TodoList';

const ArchiveScreen = ({ todos }) => {
  return (
    <Container>
      <Header />
      <Main>
        <TodoList todos={todos} />
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
  todos: state.archiveTodos.todosList,
});

export default connect(mapStateToProps)(ArchiveScreen);
