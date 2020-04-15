import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBar from './components/TabBar';

import TodosScreen from './screens/TodosScreen';
import ArchiveScreen from './screens/ArchiveScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
        <Tab.Screen name="Todos" component={TodosScreen} />
        <Tab.Screen name="Archive" component={ArchiveScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabNavigation: {
    backgroundColor: '#5c9cf5',
  },
  navigationContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: '#5c9cf5',
  },
  navigationButton: {
    height: 50,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
