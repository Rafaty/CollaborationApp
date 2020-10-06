import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import InputSearch from '../../components/InputSearch';
import CardEmployee from '../../components/CardEmployee';
import {FAB} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native'

const Employees = () => {

  const navigation = useNavigation();

  function navigateToNewEmployee(){
    navigation.navigate('NewEmployee')
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
      <InputSearch style={styles.containerInput}/>
        
      </View>
     
          
      <View style={styles.body}>
        <CardEmployee />
        <CardEmployee />
        <CardEmployee />
      </View>
      <FAB
        style={styles.fab}
        meddium
        color="#FFF"
        icon="plus"
        onPress={navigateToNewEmployee}
      />
    </View>
  );
};

export default Employees;
