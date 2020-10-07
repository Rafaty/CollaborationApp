import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../colors';
import mascaraCpf from '../../utils/macaraCpf';
import UserAvatar from 'react-native-user-avatar';
import splitName from '../../utils/splitName'

const CardEmployee = ({data, onEditPress, onDeletePress}) => {

  const nameToAvatar = splitName(data.nome)
  

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <UserAvatar
          size={50}
          name={nameToAvatar}
          bgColors={[colors.colorRed, colors.colorGreen, colors.colorOrange,colors.colorPrimaryHover,colors.colorYellow]}
        />
      </View>
      <View styles={styles.containerText}>
        <Text style={styles.name}>{data.nome}</Text>
        <Text style={styles.cpf}>{mascaraCpf(`${data.cpf}`)}</Text>
      </View>
      <View style={styles.containerIcons}>
        <TouchableOpacity style={styles.iconEdit} onPress={onEditPress}>
          <Feather size={20} name="edit" color={colors.colorText} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconDelete} onPress={onDeletePress}>
          <Feather size={20} name="trash" color={colors.colorRed} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardEmployee;
