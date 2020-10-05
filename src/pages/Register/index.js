import React from 'react'
import {
    View,
    StyleSheet,
    ImageBackground,
    TextInput,
} from 'react-native';
import colors from '../../colors';


const Register = () => {

    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')

    const instance = axios.create({
        baseURL: ''
    });

    const addEmployee = (nome, cpf) => {
        if (!nome || nome.length === 0) {
            return;
        }

        setList([
            ...listaParticipantes,
            {
                id: listaParticipantes.length + 1,
                nome,
                quantidade: 0,
                borderColor: corAleatoria(),
            },
        ]);
        setNovoParticipante('');
    };


    return (
        <View style={styles.container}>

            <View>
                <ImageBackground>
                    source={require('../../components/assets/imageRegister.svg')}
                    style={styles.imageTop}
                </ImageBackground>
            </View>
            <View>
                <TextInput
                    style={styles.textInput}
                    placeholder="  Nome do Funcionário"
                    value={nome}
                    onChangeText={(nomeDigitado) => setNome(nomeDigitado.target.value)}
                >
                </TextInput>
                <TextInput
                    style={styles.textInput}
                    placeholder="  Cpf do Funcionário"
                    value={cpf}
                    onChangeText={(cpfDigitado) => setCpf(cpfDigitado.target.value)}
                >
                </TextInput>
                <TouchableHighlight
                    style={styles.registerButton}
                    onPress={() => addEmployee(newEmployee)}>
                    <Text style={styles.registerButtonText}>Cadastrar</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    imageTop: {
        flex: 2,
    },

    textInput: {
        borderWidth: 2,
        borderRadius: 10,
        marginHorizontal: 10,
        fontSize: 20,
    },

    registerButton: {
        margin: 15,
        marginHorizontal: 10,
        backgroundColor: colors.colorPrimary,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        borderRadius: 15,
    },

    registerButtonText: {
        color: '#fff',
        fontSize: 20,
    },


})

export default Register;