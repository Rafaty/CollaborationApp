import {StyleSheet} from 'react-native';
import colors from '../../colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  imageTop: {
    marginTop: 30,
    width: 350,
    height: 250,
  },

  textInput: {
    borderWidth: 2,
    borderRadius: 10,
    marginHorizontal: 20,
    fontSize: 20,
    marginTop: '2%',
    backgroundColor: colors.colorBackground,
    borderColor: colors.colorSecondary,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 3,
  },

  registerButton: {
    margin: 15,
    marginHorizontal: 20,
    backgroundColor: colors.colorPrimary,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 15,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 3,
  },

  registerButtonText: {
    color: colors.colorBackground,
    fontSize: 20,
  },
});
