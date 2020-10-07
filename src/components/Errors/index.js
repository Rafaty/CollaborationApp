import React from 'react';
import {View, Text,Image} from 'react-native';
import styles from './styles';
import ImgNoInternet from '../../assets/image/noInternet.png'
import ImgNoData from '../../assets/image/noData.png'

export const NoInternetError = () => {
  return (
    <View style={styles.container}>
     <Image style={styles.image} source={ImgNoInternet}></Image>
     <Text style={styles.textNoInternet} >Verifique sua conexão e tente novamente!</Text>
    </View>
  );
};

export const NoDataError = () => {
  return (
    <View style={styles.container}>
     <Image style={styles.image} source={ImgNoData}></Image>
     <Text style={styles.textNoData} >Não encontramos nada aqui! Redefina sua busca ou cadastre um novo funcionário.</Text>
    </View>
  );
};

export default NoInternetError;
