import {StyleSheet} from 'react-native';
import colors from '../../colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  headerContainer: {
    height: 250,
    backgroundColor: colors.colorPrimary,
    borderBottomEndRadius: 70,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  body:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
  }

});
