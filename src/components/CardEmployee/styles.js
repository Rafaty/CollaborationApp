import {StyleSheet} from 'react-native';
import colors from '../../colors';

export default StyleSheet.create({
  container: {
    height: 90,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    margin: 20,
    borderRadius: 10,
    alignSelf: 'stretch',
    alignContent: 'center',
    justifyContent: 'space-around',
  },
  containerImage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  containerIcons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerText: {
    backgroundColor: 'blue',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  name: {
    marginTop: 20,
    fontSize: 25,
  },
  cpf: {
    fontSize: 16,
    color: colors.colorText,
  },
  iconEdit: {
    marginRight: 10,
  },
});
