import React from 'react';
import { Text, Button } from 'react-native';
import styled from 'styled-components/native';

const TodoItem = ({ todo, handleLongPress, onDelete }) => {
  return (
    <TodoContainer activeOpacity={0.5} onLongPress={handleLongPress}>
      <Text>{todo.title}</Text>
      <Button title="-" onPress={onDelete.bind(null, todo.id)} color="red" />
    </TodoContainer>
  );
};

const TodoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: #cccccc;
`;

export default TodoItem;
