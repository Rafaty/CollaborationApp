import React from 'react';
import { View,Text} from 'react-native';
import styles from './styles';
/*, Image, TouchableOpacity 
import Ionicons from 'react-native-vector-icons/Ionicons';*/
import colors from '../../colors';

const CardHome = () => {
    return (
        <View style={styles.ContainerGeral}>
            <View style={styles.Card}>
                <Text style={styles.TextTitleCard}>Quantidade de funcionários :</Text>
                <Text style={styles.TextItemCard}>8</Text>
            </View>
            <View style={styles.Card}>
                <Text style={styles.TextTitleCard}>Total de Pedidos :</Text>
                <Text style={styles.TextItemCard}>14</Text>
            </View>
            <View style={styles.Card}>
                <Text style={styles.TextTitleCard}>Valor Total Bruto :</Text>
                <Text style={styles.TextItemCard}>5.243,50</Text>
            </View>
        </View>
    )
};

export default CardHome;