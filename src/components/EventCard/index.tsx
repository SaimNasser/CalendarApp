import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import AppColors from '../../utills/AppColors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';
import { height } from 'react-native-dimension';
import moment from 'moment';
interface EventCard {
    id: string,
    eventTitle: string,
    dateAndTime: string,
    description: string,
    attachment: Object
}
const EventCard = (props: EventCard) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.title}>{props.eventTitle}</Text>
                <TouchableOpacity style={styles.btnPadding}>
                    <Entypo name={'trash'} color={AppColors.red} size={height(2.7)} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnPadding}>
                    <Entypo name={'edit'} color={AppColors.black} size={height(2.7)} />
                </TouchableOpacity>
            </View>
            <Text style={styles.subtext}>{moment(props.dateAndTime).format('DD MMMM YYYY')}</Text>
            <Text style={[styles.subtext, styles.marginTop]}>{props.description}</Text>
        </View>
    );
};

export default EventCard;
