import React from 'react';
import { TouchableOpacity, Text, Button, StyleSheet } from 'react-native';

const TodoItem = ({ todo, handleLongPress, onDelete }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.5}
      onLongPress={handleLongPress}
    >
      <Text>{todo.title}</Text>
      <Button
        style={styles.button}
        title="-"
        onPress={onDelete.bind(null, todo.id)}
        color="red"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#cccccc',
  },
  button: {
    backgroundColor: 'green',
  },
});

export default TodoItem;
