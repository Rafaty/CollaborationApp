/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import StackNavigation from './src/routes/StackNavigation';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from 'react-native-vector-icons/Ionicons';
MaterialCommunityIcons.loadFont();
Ionicons.loadFont();

const App = () => {
  return (
    <>
    <StackNavigation/>
    </>
  );
};



export default App;
