import {StyleSheet} from 'react-native';
import colors from '../../colors';
import normalize from '../../utils/normalizeFont';

export default StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
    marginRight: 15,
    marginLeft: 15,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  containerImage: {
    padding: 10,
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
  },
  containerIcons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
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
    fontSize: normalize(16),
  },
  cpf: {
    fontSize: normalize(12),
    color: colors.colorText,
  },
  iconEdit: {
    marginRight: 10,
  },
});
