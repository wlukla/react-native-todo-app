import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TodoItem = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#cccccc',
  },
});

export default TodoItem;
