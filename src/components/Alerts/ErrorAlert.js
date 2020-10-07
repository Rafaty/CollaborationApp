import {Alert} from 'react-native';

const ErrorAlert = ({message}) => {
  return Alert.alert(
    'Erro!',
    message,
    [{text: 'OK', onPress:()=>{}}],
    {cancelable: false},
  );
};

export default ErrorAlert;
