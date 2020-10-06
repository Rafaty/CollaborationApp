import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View,TextInput} from 'react-native';

import styles from './styles';

const InputSearch = () => {
  return (
    <View style={styles.searchSection}>
      <Ionicons
        style={styles.searchIcon}
        name="ios-search"
        size={20}
        color="#000"
      />
      <TextInput
        style={styles.input}
        placeholder="Pesquisar..."
        onChangeText={() => {}}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

export default InputSearch;
