import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import ScreenWrapper from '../../components/ScreenWrapper';
import AppColors from '../../utills/AppColors';
import styles from './styles';
import { useForm, Controller } from 'react-hook-form'
import { height } from 'react-native-dimension'
import DPicker from "react-native-document-picker";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FileViewer from "react-native-file-viewer";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import { showMessage } from 'react-native-flash-message';
import FilterDropdown from '../../components/FilterDropdown';
import { eventTypes } from '../../utills/dummydata';
import { EventType } from '../../utills/Enums';
import { deleteAllEvents, editEvent, getAllEventsFromStorage, saveEventToStorage } from '../../utills/Methods';
interface DocUri {
  name: string | null,
  uri: string | null
}
export default function CreateEventScreen({ navigation, route }) {
  const { getFirstBatch, edit } = route.params
  const { handleSubmit, control, formState: { errors } } = useForm()
  const [docUri, setDocUri] = useState<DocUri | null>(null)
  const [dateVisible, setDateVisible] = useState<boolean>(false)
  const [dateAndTime, setDateAndTime] = useState<string | null>(null)
  const [selectedFilter, setSelectedFilter] = useState<string>(EventType.EVENT)

  useEffect(() => {
    if (edit) {
      setDocUri(edit.file)
      setDateAndTime(edit.timeStamp)
      setSelectedFilter(edit.type)
    }
  }, [])
  const onEditPress = async (data) => {
    const { Description, Name } = data
    console.log(edit.triggerId)
    if (!dateAndTime) {
      showMessage({
        message: 'Please select date and time',
        type: 'danger'
      })
      return
    }
    const newEventObj = {
      eventTitle: Name,
      description: Description,
      file: docUri || null,
      timeStamp: dateAndTime,
      date: moment(dateAndTime).format('Do MMM YYYY hh:mm a'),
      type: selectedFilter,
      triggerId: ''
    }
    const response = await editEvent(edit.triggerId, newEventObj)
    if (response) {
      showMessage({
        message: 'Event edited successfully!',
        type: 'success'
      })
      getFirstBatch()
      navigation.navigate('ListScreen')
    }
  }
  const onCreatePress = async (data) => {
    const { Description, Name } = data
    if (!dateAndTime) {
      showMessage({
        message: 'Please select date and time',
        type: 'danger'
      })
      return
    }
    const newEventObj = {
      eventTitle: Name,
      description: Description,
      file: docUri || null,
      timeStamp: dateAndTime,
      date: moment(dateAndTime).format('Do MMM YYYY hh:mm a'),
      type: selectedFilter,
      triggerId: ''
    }
    const response = await saveEventToStorage(newEventObj)
    if (response) {
      showMessage({
        message: 'Event added successfully!',
        type: 'success'
      })
      getFirstBatch()
      navigation.navigate('ListScreen')
    }
  }
  const getDocument = async () => {
    const { uri, name } = await DPicker.pickSingle({})
    setDocUri({
      name,
      uri
    })
  }
  const onDateTimeSelected = (dateTime: Date) => {

    if (moment().isSameOrAfter(moment(dateTime))) {
      showMessage({
        message: 'Please select future date and time',
        type: 'danger',
      })
      setDateVisible(false)
      return
    }
    setDateAndTime(dateTime.toString())
    setDateVisible(false)
  }
  const onViewDoc = () => docUri?.uri && FileViewer.open(docUri.uri, { showAppsSuggestions: true })
  const onDeleteDoc = () => setDocUri(null)
  const toggleDatePicker = () => setDateVisible(prev => !prev)
  return (
    <ScreenWrapper
      statusBarColor={AppColors.white}
      barStyle='dark-content'
      headerUnScrollable={() =>
        <Header
          onLeftPress={() => navigation.goBack()}
          title={'Create Event'}
          shadow={true}
          back
        />}>
      <View style={styles.mainViewContainer} >
        <Text style={styles.label}>Select event type</Text>
        <FilterDropdown
          showIcon={false}
          containerStyle={{ alignSelf: 'center' }}
          options={eventTypes.filter(event => event !== EventType.ALL)}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter} />
        <Input
          label={'Name'}
          defaultValue={edit ? edit?.eventTitle : ''}
          placeholder={'Enter name...'}
          placeholderTextColor={AppColors.gray}
          rules={{ required: 'Please enter username' }}
          control={control}
        />
        <Input
          label={'Description'}
          defaultValue={edit ? edit?.description : ''}
          control={control}
          multiline
          containerStyle={{ marginTop: height(1.5) }}
          numberOfLines={10}
          placeholder={'Enter name...'}
          placeholderTextColor={AppColors.gray}
        />

        <View style={styles.inputContainer}>
          <View style={styles.leftInputSection}>
            <Text>Date & Time</Text>
          </View>
          <View style={styles.rightInputSection}>
            {!dateAndTime ?
              <TouchableOpacity onPress={toggleDatePicker} style={styles.selectBtn}>
                <Text style={styles.selectText}>Select</Text>
              </TouchableOpacity> :
              <TouchableOpacity onPress={toggleDatePicker} style={styles.dateContainer}>
                <Text style={styles.dateText}>{moment(dateAndTime).format('Do MMM YYYY hh:mm a')}</Text>
              </TouchableOpacity>
            }
          </View>
        </View>
        {docUri ?
          <View style={styles.docViewContainer}>
            <Text numberOfLines={1} style={styles.docName}>{docUri.name}</Text>
            <TouchableOpacity onPress={onViewDoc} style={styles.icon}>
              <AntDesign
                name={'eye'}
                color={AppColors.black}
                size={height(2.5)} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onDeleteDoc} style={styles.icon}>
              <Entypo
                name={'trash'}
                color={AppColors.black}
                size={height(2)} />
            </TouchableOpacity>
          </View>
          :
          <TouchableOpacity onPress={getDocument} style={styles.docContainer}>
            <AntDesign
              name={'pluscircleo'}
              color={AppColors.black}
              size={height(2)} />
            <Text style={styles.attachText}>Attach Document</Text>
          </TouchableOpacity>}
        <Button
          onPress={edit ? handleSubmit(onEditPress) : handleSubmit(onCreatePress)}
          title={`${edit ? 'Edit' : 'Create'} Event`}
          containerStyle={styles.createBtn} />
      </View>
      {dateVisible && <DateTimePickerModal
        minimumDate={new Date()}
        isVisible={dateVisible}
        mode="datetime"
        onConfirm={onDateTimeSelected}
        onCancel={() => setDateVisible(false)}
      />}
    </ScreenWrapper>
  );
}
