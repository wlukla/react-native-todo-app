import 'react-native-gesture-handler';
import React from 'react';
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

export default App;
