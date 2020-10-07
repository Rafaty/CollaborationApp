import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableHighlight,
  Text,
} from 'react-native';
import colors from '../../colors';
import styles from './styles';
import axios from 'axios';
import {ScrollView} from 'react-native-gesture-handler';

const Edit = () => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');

  const instance = axios.create({
    baseURL: 'http://residencia-ecommerce.us-east-1.elasticbeanstalk.com/',
  });

  const editaFuncionario = async (e) => {
    e.preventDefault();
    const data = {
      nome: name,
      cpf: cpf,
    };
    try {
      await instance.put('funcionario', data);
      setName('');
      setCpf('');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <ImageBackground
//conferir caminho de '4.png'
            source={require('../../assets/image/4.png')}
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
