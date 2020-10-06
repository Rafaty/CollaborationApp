import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import InputSearch from '../../components/InputSearch';
import CardEmployee from '../../components/CardEmployee';

const Employees = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <InputSearch />
      </View>
      <View style={styles.body}>
        <CardEmployee />
        <CardEmployee />
        <CardEmployee />
      </View>
    </View>
  );
};

export default Employees;
