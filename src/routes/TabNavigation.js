import Ionicons from 'react-native-vector-icons/Ionicons';
import Employees from '../pages/Employees'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../pages/Home';


import colors from '../colors'
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-home'
              : 'ios-home-outline';
          } else if (route.name === 'Funcionários') {
            iconName = focused ? 'ios-people-sharp' : 'ios-people-sharp';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.colorPrimaryHover,
        inactiveTintColor: 'gray',
     
        labelStyle: {
          fontSize: 14,
          margin: 0,
          padding: 0,
        },
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Funcionários" component={Employees} />
    </Tab.Navigator>
  );
}
