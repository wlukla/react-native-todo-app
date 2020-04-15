import React, { useState } from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';

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
      <Input onChangeText={setTitle} value={title} />
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
  width: 70%;
  border-color: #5c9cf5;
  border-style: solid;
  border-bottom-width: 2px;
`;

export default AddTodo;
