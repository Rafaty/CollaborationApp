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
import styles from './styles';
import getDbConnetion from '../../../services/database'

const Register = () => {

    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")

   
    const handleRegister = async () => {
        const data = {
            nome: name,
            cpf: cpf,
        };
        try {
            await saveEmployee(data);
            Alert.alert('Cadastro efetuado com sucesso!')
            setName("");
            setCpf("");

        } catch (e) {
            Alert.alert('Erro ao cadastar.')
        }
    };

    const saveEmployee = async (employee) => {

    
        const db = await getDbConnetion();
        const idLocal = db.objects('Employee').length + 1;

        db.write(() => {
            db.create('Employee', {
                ...employee,
                idLocal,
                id: idLocal,
                sync: false,
            });
        })

    }

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