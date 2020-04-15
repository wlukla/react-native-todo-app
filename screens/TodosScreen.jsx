import React, { useState } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import Header from '../components/Header';
import AddTodo from '../components/AddTodo';
import TodoItem from '../components/TodoItem';

const TodosScreen = ({ navigation }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    setTodos((prevTodos) => [
      {
        id: Date.now().toString(),
        title,
      },
      ...prevTodos,
    ]);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <Container>
      <Header />
      <Main>
        <AddTodo addTodo={addTodo} />
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TodoItem todo={item} onDelete={deleteTodo} />
          )}
          keyExtractor={({ id }) => id}
        />
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
