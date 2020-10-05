import Ionicons from 'react-native-vector-icons/Ionicons';
import Employees from '../pages/Employees'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';


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
          } else if (route.name === 'Employee') {
            iconName = focused ? 'ios-people-sharp' : 'ios-people-sharp';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={Employees} />
      <Tab.Screen name="Employee" component={Employees} />
    </Tab.Navigator>
  );
}
