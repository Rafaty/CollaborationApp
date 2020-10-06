/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import StackNavigation from './src/routes/StackNavigation';
<<<<<<< HEAD
import SplashScreen from 'react-native-splash-screen';
=======
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from 'react-native-vector-icons/Ionicons';
MaterialCommunityIcons.loadFont();
Ionicons.loadFont();
>>>>>>> c3450caf7973c21c60796a7496ee7b7b06dcafc6

const App = () => {

  useEffect(() => {
    
    SplashScreen.hide()
    
  }, [])
  return (
    <>
    <StackNavigation/>
    </>
  );
};



export default App;
