import {Alert} from 'react-native';

const SuccessAlert = ({message}) => {
  return Alert.alert(
    'Sucesso!',
    message,
    [{text: 'OK', onPress: () => {}}],
    {cancelable: false},
  );
};

export default SuccessAlert;
