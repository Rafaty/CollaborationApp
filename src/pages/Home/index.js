import React from 'react'
import { View, ImageBackground } from 'react-native';
import styles from './styles';
import CardHome from '../../components/CardHome';
import { ScrollView } from 'react-native-gesture-handler';

const Home = () => {
    return (
        <View style={styles.ContainerGeral}>
            <ScrollView>
                <View style={styles.ImageContainer}>
                    <ImageBackground
                        source={require('../../assets/image/TopHome.png')}
                        style={styles.imageTop}>
                    </ImageBackground>
                </View>
                <View style={styles.ContainerCentral}>
                    <CardHome />
                </View>
            </ScrollView>
        </View>
    )
}

export default Home;
