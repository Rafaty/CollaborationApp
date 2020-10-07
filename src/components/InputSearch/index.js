import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View,TextInput} from 'react-native';

import styles from './styles';

const InputSearch = ({value,onChangeText}) => {
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
        value={value}
        placeholder="Pesquisar..."
        onChangeText={(text) => onChangeText(text)}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

export default InputSearch;
