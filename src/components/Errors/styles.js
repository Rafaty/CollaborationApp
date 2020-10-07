import {StyleSheet} from 'react-native';
import colors from '../../colors';
import normalize from '../../utils/normalizeFont';

export default StyleSheet.create({
  container: {
    maxHeight: 200,
    display: 'flex',
    alignItems: 'center',
    margin: 20,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  
  image: {
      resizeMode:'contain',
      width:'100%',
      height:'100%'
  },
  textNoInternet:{
    marginTop:3,
    fontSize:normalize(25),  
  },
  textNoData:{
    marginTop:3,
    fontSize:normalize(16),  
  }
});
