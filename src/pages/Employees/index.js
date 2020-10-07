import React, {useState, useEffect} from 'react';
import {View, Image, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';
import InputSearch from '../../components/InputSearch';
import CardEmployee from '../../components/CardEmployee';
import {FAB} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import api from '../../services/api';
import Feather from 'react-native-vector-icons/Feather';

import ConfirmationAlert from '../../components/Alerts/ConfirmationAlert';
import SuccessAlert from '../../components/Alerts/SuccessAlert';
import ErrorAlert from '../../components/Alerts/ErrorAlert';
import Loading from '../../components/Loading';
import ImgEmployee from '../../assets/image/employee.png';

const Employees = () => {
  const navigation = useNavigation();
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const [loading, setLoading] = useState(false);

  function navigateToNewEmployee() {
    navigation.navigate('NewEmployee');
  }
  function navigateToEditEmployee(data) {
    navigation.navigate('EditEmployee', {data});
  }

  function handleChange(text) {
    setSearchTerm(text);
  }

  function handleDeleteClick(employee) {
    ConfirmationAlert(
      `Deseja realmente excluir ${employee.nome} ?`,
      deleteEmployee(employee),
    );
  }

  async function deleteEmployee(employee) {
    try {
      const response = await api.delete(`funcionario/${employee.id}`);
      if (response.status == 200) {
        SuccessAlert('llll');
      }
    } catch (err) {
      ErrorAlert('TESTE');
    }
  }
  const fecthData = async () => {
    try {
      setLoading(true);
      const response = await api.get('funcionario');
      setEmployees(response.data);
      setSearchResults(response.data);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
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
    <View style={styles.container}>
      <View style={styles.headerContainer}>
      
        <View style={styles.refreshContainer}>
          <TouchableOpacity onPress={fecthData}>
            <Feather name="refresh-ccw" size={35} color="white"></Feather>
          </TouchableOpacity>
        </View>

        <Image style={styles.image} source={ImgEmployee} />


        <InputSearch
          onChangeText={handleChange}
          value={searchTerm}
          style={styles.containerInput}
        />
        
      </View>
     

      <View style={styles.body}>
        {loading ? (
          <Loading />
        ) : (
          <FlatList
            data={searchResults}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <CardEmployee
                onEditPress={() => {
                  navigateToEditEmployee(item);
                }}
                onDeletePress={() => {
                  handleDeleteClick(item);
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
    </View>
  );
};

export default Employees;
