import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import {BorderlessButton} from 'react-native-gesture-handler';
import backIcon from '../../assets/img/icons/back.png';
import logoImg from '../../assets/img/logo.png';
import { useNavigation } from '@react-navigation/native';


interface PageHeaderPros{
    title:string;
}

const PageHeader:React.FC<PageHeaderPros> =({title})=>{

    const {navigate} = useNavigation();

    function handleGoBack(){
        navigate('Landing');
    }

    return(
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoBack}>
                    <Image source={backIcon} resizeMode="contain"/>
                </BorderlessButton>
                <Image source={logoImg} resizeMode="contain"/>
            </View>
            <Text style={styles.title}>{title}</Text>
        </View>

    )
}

export default PageHeader;