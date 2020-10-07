import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
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
import {NoInternetError, NoDataError} from '../../components/Errors';

const Employees = () => {
  const navigation = useNavigation();
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

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

  const fecthData = async () => {
    setIsLoading(true);
    api
      .get('funcionario')
      .then((response) => {
        setEmployees(response.data);
        setSearchResults(response.data);
        setIsLoading(false);
      })
      .catch(() => {
        setHasError(true);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fecthData();
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
          <TouchableOpacity onPress={fecthData}>
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
        ) : hasError ? (
          <NoInternetError />
        ) : (
          <FlatList
            data={searchResults}
            showsVerticalScrollIndicator={false}
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
