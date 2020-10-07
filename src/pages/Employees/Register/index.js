import React, { useState } from 'react'
import {
    View,
    ImageBackground,
    TextInput,
    TouchableHighlight,
    Text,
    ScrollView,
    Alert,
} from 'react-native';
import colors from '../../../colors';
import axios from 'axios';
import styles from './styles';

const Register = () => {

    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")

    const instance = axios.create({
        baseURL: 'http://residencia-ecommerce.us-east-1.elasticbeanstalk.com/'

    });


    const handleRegister = async () => {

        const data = {
            nome: name,
            cpf: cpf,
        };
        try {

            await instance.post("funcionario", data);
            Alert.alert('Cadastro efetuado com sucesso!')
            setName("");
            setCpf("");

        } catch {
            Alert.alert('Erro ao cadastar.')
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.imageContainer}>
                    <ImageBackground
                        source={require('../../../assets/image/imageTop.png')}
                        style={styles.imageTop}>
                    </ImageBackground>
                </View>
                <View>

                    <TextInput
                        style={styles.textInput}
                        placeholder="  Nome do Funcionário"
                        value={name}
                        onChangeText={(texto) => {
                            setName(texto);
                        }}
                    >
                    </TextInput>
                    <TextInput
                        style={styles.textInput}
                        placeholder="  Cpf do Funcionário"
                        value={cpf}
                        onChangeText={(texto) => {
                            setCpf(texto);
                        }}
                    >
                    </TextInput>
                    <TouchableHighlight
                        underlayColor={colors.colorPrimaryHover}
                        style={styles.registerButton}
                        onPress={handleRegister}>
                        <Text style={styles.registerButtonText}>Cadastrar</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        </View>
    )
}



export default Register;