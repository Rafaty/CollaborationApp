import {StyleSheet} from 'react-native';
import colors from '../../colors';

import { Dimensions, Platform, PixelRatio } from 'react-native';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
  const newSize = size * scale 
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}

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
