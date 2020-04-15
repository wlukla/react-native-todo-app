import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-native';
import styled from 'styled-components/native';

import { addTodoToActive } from '../redux/actions';

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const handlePress = (title) => {
    if (title.trim()) {
      setTitle('');
      addTodo(title);
    }
  };

  return (
    <Container>
      <Input
        onChangeText={setTitle}
        value={title}
        onEndEditing={handlePress.bind(null, title)}
        placeholder="Add your task..."
      />
      <Button title="+" onPress={handlePress.bind(null, title)} />
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.TextInput`
  font-size: 18px;
  width: 70%;
  border-color: #5c9cf5;
  border-style: solid;
  border-bottom-width: 2px;
`;

const mapDispatchToProps = {
  addTodo: addTodoToActive,
};

export default connect(null, mapDispatchToProps)(AddTodo);
