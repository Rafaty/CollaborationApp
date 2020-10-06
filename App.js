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
import SplashScreen from 'react-native-splash-screen';

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
