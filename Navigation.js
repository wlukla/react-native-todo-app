import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import TabBar from './components/TabBar';

import TodosScreen from './screens/TodosScreen';
import ArchiveScreen from './screens/ArchiveScreen';
import TodoScreen from './screens/TodoScreen';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const TodosTabNavigation = () => (
  <Stack.Navigator tabBar={(props) => <TabBar {...props} />}>
    <Stack.Screen name="Todos" component={TodosScreen} options={headerStyles} />
    <Stack.Screen name="Todo" component={TodoScreen} />
  </Stack.Navigator>
);

const ArchiveTabNavigation = () => (
  <Stack.Navigator tabBar={(props) => <TabBar {...props} />}>
    <Stack.Screen
      name="Archive"
      component={ArchiveScreen}
      options={headerStyles}
    />
    <Stack.Screen name="Todo" component={TodoScreen} />
  </Stack.Navigator>
);

const MainNavigation = () => (
  <NavigationContainer>
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen name="Todos" component={TodosTabNavigation} />
      <Tab.Screen name="Archive" component={ArchiveTabNavigation} />
    </Tab.Navigator>
  </NavigationContainer>
);

const headerStyles = {
  headerStyle: {
    backgroundColor: '#5c9cf5',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default MainNavigation;
