
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './TabNavigation'
import { NavigationContainer } from '@react-navigation/native';
import Register from '../pages/Employees/Register';
const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Home" component={TabNavigation} />
        <Stack.Screen
          options={{
            title: 'Cadastro de Funcionário'
          }}
          name="NewEmployee"
          component={Register}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}