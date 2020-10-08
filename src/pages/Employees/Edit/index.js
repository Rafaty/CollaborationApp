import React, { useState, useEffect } from 'react';
import {
  View,
  ImageBackground,
  TextInput,
  TouchableHighlight,
  Text,
  Alert,
} from 'react-native';
import styles from './styles';

import { ScrollView } from 'react-native-gesture-handler';
import api from '../../../services/api'

const Edit = ({ route }) => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');



  useEffect(() => {
    setName(route.params.data.nome);
    setCpf(route.params.data.cpf);
  }, []);

  const editaFuncionario = async () => {
    const data = {
      nome: name,
      cpf: cpf,
    };
    try {
      await api.put(`funcionario/${route.params.data.id}`, data);
      setName('');
      setCpf('');
      Alert.alert('Funcionário alterado com sucesso.')
    } catch {
      Alert.alert('Erro ao editar.')
    }
  };

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
