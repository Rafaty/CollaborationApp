import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import InputSearch from '../../components/InputSearch';
import CardEmployee from '../../components/CardEmployee';
import {FAB} from 'react-native-paper';

const Employees = () => {
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
        onPress={() => console.log('Pressed')}
      />
    </View>
  );
};

export default Employees;
