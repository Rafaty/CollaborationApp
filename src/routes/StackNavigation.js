
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './TabNavigation'
import { NavigationContainer } from '@react-navigation/native';
import Register from '../pages/Register';
const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ headerShown: false }} component={TabNavigation} />
        <Stack.Screen name="NewEmployee" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}