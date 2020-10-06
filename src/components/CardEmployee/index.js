import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../colors';
import mascaraCpf from '../../utils/macaraCpf';
const CardEmployee = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          style={styles.image}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYkiuKIerNcNp1RkNAuGpRC9YhnYBBjekRUA&usqp=CAU',
          }}></Image>
      </View>
      <View styles={styles.containerText}>
        <Text style={styles.name}>Rafael Santana</Text>
        <Text style={styles.cpf}>{mascaraCpf('16353926758')}</Text>
      </View>
      <View style={styles.containerIcons}>
        <TouchableOpacity style={styles.iconEdit} onPress={() => {}}>
          <Ionicons size={20} name="md-pencil" color={colors.colorText} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconDelete} onPress={() => {}}>
          <Ionicons size={20} name="ios-trash" color={colors.colorRed} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardEmployee;
