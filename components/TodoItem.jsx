import React from 'react';
import { connect } from 'react-redux';
import { Text, Button } from 'react-native';
import styled from 'styled-components/native';

import { deleteTodoFromActive, deleteTodoFromArchive } from '../redux/actions';

const TodoItem = ({
  todo,
  deleteTodoFromActive,
  deleteTodoFromArchive,
  isActive,
}) => {
  const handleDelete = () => {
    isActive ? deleteTodoFromArchive(todo) : deleteTodoFromActive(todo);
  };

  return (
    <TodoContainer activeOpacity={0.5}>
      <Text>{todo.title}</Text>
      <Button title="-" onPress={handleDelete} color="red" />
    </TodoContainer>
  );
};

const TodoContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: #cccccc;
  border-radius: 10px;
`;

const mapDispatchToProps = {
  deleteTodoFromActive,
  deleteTodoFromArchive,
};

export default connect(null, mapDispatchToProps)(TodoItem);
