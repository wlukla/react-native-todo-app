import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

import Header from '../components/Header';

const ArchiveScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.main}>
        <Text>THIS IS ARCHIVE</Text>
        <View>
          <Button title="Todos" onPress={() => navigation.navigate('Todos')} />
          <Button
            title="Archive"
            onPress={() => navigation.navigate('Archive')}
          />
        </View>
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
  navigationContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'red',
  },
});

export default ArchiveScreen;
