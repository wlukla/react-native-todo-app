import React from 'react';
import styled from 'styled-components/native';

import TodoItem from '../components/TodoItem';

const TodoList = ({ todos, isActive }) => (
  <TodoListContainer
    data={todos}
    renderItem={({ item }) => <TodoItem todo={item} isActive={isActive} />}
    keyExtractor={({ id }) => id}
  />
);

const TodoListContainer = styled.FlatList`
  margin-top: 10px;
`;

export default TodoList;
