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
      dataFromApi.map((employee) => {
        db.create('Employee', {...employee, sync: true}, 'modified');
      });
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
    api
      .get('funcionario')
      .then((response) => {
        saveEmployess(response.data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }

  async function findAllEmployess() {
    const db = await getDbConnection();
    let listOfEmployess = db.objects('Employee');
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
