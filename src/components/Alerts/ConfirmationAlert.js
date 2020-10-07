import {Alert} from 'react-native';

const ConfirmationAlert = (message,handleOk) => {
  return Alert.alert(
    'Atenção!',
    message,
    [
      {
        text: 'Cancelar',
        onPress: () => {},
        style: 'cancel',
      },
      {text: 'OK', onPress:() => handleOk },
    ],
    {cancelable: false},
  );
};

export default ConfirmationAlert;
