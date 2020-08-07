import React from 'react';

import styles from './styles';
import { View, Image, Text, Button} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import heartOutlineIcon from '../../assets/img/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/img/icons/unfavorite.png';
import whatsapp from '../../assets/img/icons/whatsapp.png';

interface TeacherItemPros{
    value:string,
}

const TeacherItem:React.FC<TeacherItemPros> =({value})=>{

    return (
        <View style={styles.container}>
            <View style={styles.profile}>

                <Image 
                    style={styles.avatar}
                    source={{uri:'https://media-exp1.licdn.com/dms/image/C4D03AQFwC_zDGCpqRg/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=4neK-iGoqD0Who2h608xx3uHZW_ZxgrydqHQ3fs0ANg'}}

                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>
                        Lucas
                    </Text>
                    <Text style={styles.subjec}>
                       Quimica
                    </Text>
                </View>
                <Text style={styles.bio}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident itaque ullam omnis, deleniti unde voluptates numquam consequatur amet non quam tempore, a sequi nemo maxime nihil quod ex. Ea, laboriosam?  
                </Text>
                <View style={styles.footer}>
                    <Text style={styles.price}>
                        Preço/hora {'   '}
                        <Text style={styles.priceValue}>
                            R$ 20,20
                        </Text>
                    </Text>
                    <View style={styles.buttonsContainer}>
                        <RectButton style={styles.favoriteButton}>
                            <Image source={heartOutlineIcon}/>
                        </RectButton>
                        <RectButton style={styles.contactButton}>
                            <Image source={whatsapp}/>
                            <Text style={styles.contactButtonText}>Entrar em contato</Text>
                        </RectButton>
    
                    </View>
                </View>
            </View>
        </View>
    );
}

export default TeacherItem;