import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';

const App = () => {
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

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.main}>
        <AddTodo addTodo={addTodo} />
        <FlatList
          data={todos}
          renderItem={({ item }) => <TodoItem title={item.title} />}
          keyExtractor={({ id }) => id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  main: {
    padding: 10,
  },
});

export default App;
