import { FlashList } from '@shopify/flash-list';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import EventCard from '../../components/EventCard';
import Header from '../../components/Header';
import ScreenWrapper from '../../components/ScreenWrapper';
import AppColors from '../../utills/AppColors';
import { eventList } from '../../utills/dummydata';
import styles from './styles';
import { EventTypee } from '../../utills/Types'
import { getEventByDate } from '../../utills/Methods';

interface CalendarDateObj {
  dateString: string,
  day: Number,
  month: Number,
  timestamp: Number,
  year: Number
}
export default function CalendarScreen({ navigation, route }) {
  const [markedDates, setMarkedDates] = useState<any>({
   
  })
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [events, setEvents] = useState<EventTypee[] | undefined>([])

  const renderEvent = ({ item }) => {
    return (
      <EventCard {...item} />
    )
  }

  useEffect(() => {
    if (selectedDate)
      getEventByDate(selectedDate)
        .then((response) => {
          setEvents(response)
        })
  }, [selectedDate])
  const renderEmpty = () =>
    <View style={styles.empty}>
      <Text style={styles.emptyText}>No events</Text>
    </View>
  const onDayPress = (date: CalendarDateObj) => {
    setMarkedDates({
      [date.dateString]: { selected: true, selectedColor: AppColors.black },
    })
    setSelectedDate(date.dateString)
  }
  return (
    <ScreenWrapper
      statusBarColor={AppColors.white}
      barStyle='dark-content'
      headerUnScrollable={() =>
        <Header
          title={'My Events Calendar'}
          shadow={true}
        />}>
      <View style={styles.mainViewContainer} >
        <Calendar
          disableAllTouchEventsForDisabledDays
          onDayPress={onDayPress}
          markedDates={markedDates}
          theme={{
            arrowColor: AppColors.black,
            textSectionTitleColor: AppColors.black,
            monthTextColor: AppColors.black,
            todayTextColor: AppColors.black,
            todayBackgroundColor: AppColors.white,
          }}
        />
        {selectedDate != '' && <Text style={styles.dateText}>Events on {moment(selectedDate, 'YYYY-MM-DD').format('D MMM YYYY')}</Text>}
        <FlashList
          data={events}
          renderItem={renderEvent}
          ListEmptyComponent={renderEmpty}
          estimatedItemSize={100}
        />
      </View>
    </ScreenWrapper>
  );
}
