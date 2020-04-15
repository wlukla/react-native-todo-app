import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const handlePress = (title) => {
    if (title.trim()) {
      setTitle('');
      addTodo(title);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={setTitle}
        value={title}
      />
      <Button title="+" onPress={handlePress.bind(null, title)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    width: '70%',
    borderColor: '#5c9cf5',
    borderStyle: 'solid',
    borderBottomWidth: 2,
  },
});

export default AddTodo;
