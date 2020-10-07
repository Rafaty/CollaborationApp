
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './TabNavigation'
import { NavigationContainer } from '@react-navigation/native';
import Register from '../pages/Employees/Register';
import Edit from '../pages/Employees/Edit';

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
        <Stack.Screen
          options={{
            title: 'Edição de Funcionário'
          }}
          name="EditEmployee"
          component={Edit}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}