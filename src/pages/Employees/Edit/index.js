import React, {useState, useEffect} from 'react';
import {
  View,
  ImageBackground,
  TextInput,
  TouchableHighlight,
  Text,
  Alert,
} from 'react-native';
import styles from './styles';

import {ScrollView} from 'react-native-gesture-handler';
import api from '../../../services/api';
import getDbConnection from '../../../services/database';
import {useNavigation} from '@react-navigation/native';

const Edit = ({route}) => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const navigation = useNavigation();

  const editaFuncionario = async () => {
    const data = {
      nome: name,
      cpf: cpf,
    };

    try {
      const db = await getDbConnection();

      let employeeToEdit = db
        .objects('Employee')
        .filtered(`id = ${route.params.data.id}`);

      console.log(employeeToEdit);
      //atualizando remoto e local
      if (employeeToEdit[0].sync) {
        try {
          await api.put(`funcionario/${route.params.data.id}`, data);

          db.write(() => {
            db.create(
              'Employee',
              {
                idLocal: employeeToEdit[0].idLocal,
                id: route.params.id,
                nome: name,
                cpf: cpf,
                sync: true,
              },
              true,
            );
          });

          setName('');
          setCpf('');
          Alert.alert('Funcionário alterado com sucesso.');
          navigation.goBack();
        } catch (error) {
          Alert.alert('Desculpe, ocorreu um erro');
        }
      } else {
        //atualizando somente local
        try {
          db.write(() => {
            db.create(
              'Employee',
              {
                idLocal: employeeToEdit.idLocal,
                id: employeeToEdit.id,
                nome: name,
                cpf: cpf,
                sync: false,
              },
              true,
            );
          });
          Alert.alert('Funcionário alterado com sucesso.');
          navigation.goBack();
        } catch (error) {
          Alert.alert('Desculpe, ocorreu um erro.');
        }
      }
    } catch (error) {
      Alert.alert('Desculpe, ocorreu um erro');
    }
  };

  useEffect(() => {
    setName(route.params.data.nome);
    setCpf(route.params.data.cpf);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <ImageBackground
            source={require('../../../assets/image/imageEdit.png')}
            style={styles.imageTop}></ImageBackground>
        </View>
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="  Nome do Funcionário"
            value={name}
            onChangeText={(texto) => {
              setName(texto);
            }}></TextInput>
          <TextInput
            style={styles.textInput}
            placeholder="  Cpf do Funcionário"
            value={cpf}
            onChangeText={(texto) => {
              setCpf(texto);
            }}></TextInput>
          <TouchableHighlight
            style={styles.registerButton}
            onPress={editaFuncionario}>
            <Text style={styles.registerButtonText}>Editar</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </View>
  );
};

export default Edit;
