import React, { useState } from 'react'
import {
    View,
    StyleSheet,
    ImageBackground,
    TextInput,
    TouchableHighlight,
    Text,
} from 'react-native';
import colors from '../../colors';
import axios from 'axios';




const Register = () => {

    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")

    const instance = axios.create({
        baseURL: 'http://residencia-ecommerce.us-east-1.elasticbeanstalk.com/'

    });


    const handleRegister = async (e) => {
        e.preventDefault();
        const data = {
            nome: name,
            cpf: cpf,
        };
        try {

            await instance.post("funcionario", data);
            setName("");
            setCpf("");

        } catch (e) {
            console.log(e)
        }
    };

    return (
        <View style={styles.container}>

            <View style={styles.imageContainer}>
                <ImageBackground
                    source={require('../../components/assets/imageTop.png')}
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
                    style={styles.registerButton}
                    onPress={handleRegister}>
                    <Text style={styles.registerButtonText}>Cadastrar</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },

    imageTop: {
        marginTop: 30,
        width: 350,
        height: 250,
    },



    textInput: {
        borderWidth: 2,
        borderRadius: 10,
        marginHorizontal: 20,
        fontSize: 20,
        marginTop: "2%",
        backgroundColor: colors.colorBackground,
        borderColor: colors.colorSecondary,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,


        elevation: 3,
    },


    registerButton: {

        margin: 15,
        marginHorizontal: 20,
        backgroundColor: colors.colorPrimary,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 15,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 3,
    },

    registerButtonText: {
        color: colors.colorBackground,
        fontSize: 20,
    },


})

export default Register;