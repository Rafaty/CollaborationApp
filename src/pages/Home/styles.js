import { StyleSheet } from 'react-native';
import colors from '../../colors';

export default StyleSheet.create({
  ContainerGeral: {
    flex: 1,
    alignContent: 'center',
    alignItems:'center',
    backgroundColor: colors.colorPrimary,
  },

  TextTop: {
    fontSize: 20,
    textAlign: 'center',

    fontWeight: 'bold',
  },


  TopContainer:{
    alignItems:'center',
  },

  ImageTop: {
    height: 120,
    width: 120,
    resizeMode:'contain',
  },

  ImageContainer:{
    height:250,
    width:300,
    resizeMode:'contain',
  }
});