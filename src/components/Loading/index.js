import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './styles';
import colors from '../../colors';
const Loading = () => {
  return (
    <View style={styles.containerLoading}>
      <ActivityIndicator size="large" color={colors.colorPrimaryHover} />
    </View>
  );
};

export default Loading;
