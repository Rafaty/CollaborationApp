import React from 'react'
import { View, Text, Image } from 'react-native';
import styles from './styles';
import HomeImage from '../../assets/image/Home.png';
import Logo from '../../assets/image/logo.png';


const Home = () => {
    return (
        
        <View style={styles.ContainerGeral}>
            <View style={styles.TopContainer}>
                <Image style={styles.ImageTop} source={Logo}/>
                <Text style={styles.TextTop}>
                    Bem-Vindo ao CollaboratiON !
                </Text>
            </View>
                <View>
                    <Image style={styles.ImageContainer} source={HomeImage}/>
                </View>
        </View>
    )
}

export default Home;
