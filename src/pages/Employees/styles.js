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
  containerInput: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    borderRadius: 15,

    elevation: 6,
    borderWidth:0.7,
    width: 410,
  },

  body: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: colors.colorPrimaryHover,
  },
});
