import { FlashList } from '@shopify/flash-list';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import EventCard, { EventCardType } from '../../components/EventCard';
import Header from '../../components/Header';
import ScreenWrapper from '../../components/ScreenWrapper';
import AppColors from '../../utills/AppColors';
import { eventList } from '../../utills/dummydata';
import styles from './styles';

interface CalendarDateObj {
  dateString: string,
  day: Number,
  month: Number,
  timestamp: Number,
  year: Number
}
export default function CalendarScreen({ navigation, route }) {
  const [markedDates, setMarkedDates] = useState<any>({
    [moment().format('YYYY-MM-DD')]: { marked: true, dotColor: AppColors.black }
  })
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [events, setEvents] = useState<Array<EventCardType>>([])

  const renderEvent = ({ item }) => {
    return (
      <EventCard {...item} />
    )
  }

  useEffect(() => {
    const eventsOnDate = eventList.filter(item => item.date == selectedDate)
    setEvents(eventsOnDate)
  }, [selectedDate])

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
          estimatedItemSize={10}
        />
      </View>
    </ScreenWrapper>
  );
}
