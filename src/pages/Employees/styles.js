import {StyleSheet} from 'react-native';
import colors from '../../colors';

export default StyleSheet.create({
  container: {
    flex: 10,
  },

  headerContainer: {
    flex: 4,
    backgroundColor: colors.colorPrimary,
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
  },
  containerInput: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    borderRadius: 15,

    elevation: 6,
    borderWidth: 0.7,
  },

  body: {
    flex: 6,
  },
  containerLoading: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  refreshContainer: {
    flex:1,
    alignSelf: 'flex-end',
    margin: 10,
  },

  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: colors.colorPrimaryHover,
  },

  image: {
    flex: 2.5,
    maxWidth: 250,
    marginLeft:20,
    alignSelf: 'flex-start',
    resizeMode: 'contain',
  },
});
