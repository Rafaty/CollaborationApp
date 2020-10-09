import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FAB} from 'react-native-paper';

import Loading from '../../components/Loading';
import InputSearch from '../../components/InputSearch';
import CardEmployee from '../../components/CardEmployee';
import styles from './styles';

import Feather from 'react-native-vector-icons/Feather';
import ImgEmployee from '../../assets/image/employee.png';

import api from '../../services/api';
import {NoDataError} from '../../components/Errors';

import getDbConnection from '../../services/database';

const Employees = () => {
  const navigation = useNavigation();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [employees, setEmployees] = useState([]);

  function navigateToNewEmployee() {
    navigation.navigate('NewEmployee');
  }

  function updateListAfterDelete(employeeToRemove) {
    const newList = searchResults.filter(
      (employee) => employee.id !== employeeToRemove.id,
    );
    setSearchResults(newList);
    setSearchTerm('');
  }

  async function saveEmployess(dataFromApi) {
    const db = await getDbConnection();

    db.write(() => {
      try {
        dataFromApi.map((employee) => {
          db.create(
            'Employee',
            {
              idLocal: employee.id,
              id: employee.id,
              cpf: employee.cpf,
              nome: employee.nome,
              sync: true,
            },
            'never',
          );
        });
      } catch (error) {
        console.log(error);
      }
    });
    setEmployees(dataFromApi);
  }

  async function deleteEmployee(employee) {
    try {
      setIsLoading(true);

      await api.delete(`funcionario/${employee.id}`);

      Alert.alert('', 'Funcionário excluido com sucesso!');
      updateListAfterDelete(employee);
    } catch {
      Alert.alert(
        'Ocorreu um erro!',
        'Verifique sua conexão ou tente novamente mais tarde!',
      );
    }
    setIsLoading(false);
  }

  async function fecthDataFromApi() {
    setIsLoading(true);

    try {
      const response = await api.get('funcionario');
      if (response.data.length > 0) {
        saveEmployess(response.data);
      }
      setIsLoading(false);
    } catch {
      setIsLoading(false);
    }
  }

  async function sendDataToApi() {
    const db = await getDbConnection();
    let listOfEmployess = db.objects('Employee').filtered('sync = false');
    setIsLoading(true);
    try {
      if (listOfEmployess.length > 0) {
        listOfEmployess.map(async (employee) => {
          try {
            console.log('employe', employee);
            const response = await api.post('funcionario', {
              nome: employee.nome,
              cpf: employee.cpf,
            });

            db.write(() => {
              db.create(
                'Employee',
                {idLocal: employee.idLocal, id: response.data.id, sync: true},
                true,
              );
            });
          } catch (err) {
            Alert.alert('Desculpe, ocorreu um erro ao enviar os dados!')
          }
        });

      }
      Alert.alert('Dados enviados com sucesso!')
    } catch (e) {
      Alert.alert('Desculpe, ocorreu um erro ao enviar os dados!')
    }
    setIsLoading(false);
  }

  async function findAllEmployess() {
    const db = await getDbConnection();
    let listOfEmployess = db.objects('Employee');
    console.log(listOfEmployess);
    setSearchResults(listOfEmployess);
  }

  useEffect(() => {
    fecthDataFromApi();
  }, []);

  useEffect(() => {
    findAllEmployess();
  }, []);

  useEffect(() => {
    const results = employees.filter((employee) =>
      employee.nome.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.refreshContainer}>
          <TouchableOpacity onPress={sendDataToApi}>
            <Feather
              style={{marginRight: 25}}
              name="upload-cloud"
              size={35}
              color="white"></Feather>
          </TouchableOpacity>
          <TouchableOpacity onPress={fecthDataFromApi}>
            <Feather name="refresh-ccw" size={35} color="white"></Feather>
          </TouchableOpacity>
        </View>

        <Image style={styles.image} source={ImgEmployee} />

        <InputSearch
          onChangeText={setSearchTerm}
          value={searchTerm}
          style={styles.containerInput}
        />
      </View>

      <View style={styles.body}>
        {!isLoading && searchResults.length <= 0 && <NoDataError />}

        {isLoading ? (
          <Loading />
        ) : (
          <FlatList
            data={searchResults}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handler"
            keyExtractor={(item) => String(item.id)}
            renderItem={({item}) => (
              <CardEmployee
                onEditPress={() => {
                  navigateToEditEmployee(item);
                }}
                deleteAction={() => {
                  deleteEmployee(item);
                }}
                key={item.id}
                data={item}
              />
            )}
          />
        )}
      </View>

      <FAB
        style={styles.fab}
        meddium
        color="#FFF"
        icon="plus"
        onPress={navigateToNewEmployee}
      />
    </SafeAreaView>
  );
};

export default Employees;
