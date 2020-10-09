import { StyleSheet } from 'react-native';
import colors from '../../colors';

export default StyleSheet.create({
  ContainerGeral: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.colorPrimary,
  },

  TextTop: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  TopContainer: {
    alignItems: 'center',
  },

  ImageTop: {
    height: 180,
    width: 180,
    resizeMode: 'contain',
  },

  ImageBottom: {
    height: "80%",
    width: 450,
    resizeMode: 'contain',
  }
});