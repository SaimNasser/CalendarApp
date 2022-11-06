import React, { useState } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import AppColors from '../../utills/AppColors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';
import { height } from 'react-native-dimension';
import moment, { MomentInput } from 'moment';
import { EventTypee } from '../../utills/Types';
import FileViewer from "react-native-file-viewer";
import { deleteEvent } from '../../utills/Methods';
import { useNavigation } from '@react-navigation/native';
const EventCard = (props: EventTypee) => {
    const onViewDoc = () => props?.file?.uri && FileViewer.open(props?.file?.uri, { showAppsSuggestions: true })
    const [deleteLoading, setDeleteLoading] = useState(false)
    const navigation = useNavigation()
    const onDelete = async () => {
        setDeleteLoading(true)
        await deleteEvent(props.triggerId)
        props.resetList && props.resetList()
    }
    const onEdit = () => {
        navigation.navigate('CreateEventScreen', { getFirstBatch: props.resetList, edit: props })
    }
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.title}>{props.eventTitle}</Text>
                <TouchableOpacity onPress={onDelete} style={styles.btnPadding}>
                    {deleteLoading ? <ActivityIndicator size={'small'} color={AppColors.red} /> :
                        <Entypo name={'trash'} color={AppColors.red} size={height(2.7)} />}
                </TouchableOpacity>
                <TouchableOpacity onPress={onEdit} style={styles.btnPadding}>
                    <Entypo name={'edit'} color={AppColors.black} size={height(2.7)} />
                </TouchableOpacity>
            </View>
            <Text style={styles.subtext}>{props.date}</Text>
            <Text style={[styles.subtext, styles.marginTop]}>{props.description}</Text>
            {props.file && <View style={styles.docViewContainer}>
                <Text numberOfLines={1} style={styles.docName}>{props.file.name}</Text>
                <TouchableOpacity onPress={onViewDoc} style={styles.icon}>
                    <AntDesign
                        name={'eye'}
                        color={AppColors.black}
                        size={height(2.5)} />
                </TouchableOpacity>
            </View>}
            <Text style={styles.typetext}>{props.type}</Text>
        </View>
    );
};

export default EventCard;
