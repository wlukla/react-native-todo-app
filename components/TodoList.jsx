import React from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';

import TodoItem from '../components/TodoItem';

const TodoList = ({ todos }) => (
  <FlatList
    data={todos}
    renderItem={({ item }) => <TodoItem todo={item} />}
    keyExtractor={({ id }) => id}
  />
);

const mapStateToProps = (state) => ({
  todos: state.activeTodos.todosList,
});

export default connect(mapStateToProps)(TodoList);
