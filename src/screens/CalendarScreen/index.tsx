import React, { useState } from 'react';
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import EventCard from '../../components/EventCard';
import Header from '../../components/Header';
import ScreenWrapper from '../../components/ScreenWrapper';
import AppColors from '../../utills/AppColors';
import { EventType } from '../../utills/Enums';
import styles from './styles';

export default function CalendarScreen({ navigation, route }) {
  const [markedDate, setMarkedDates] = useState({})
  const renderEvent = ({ item }) => {
    return (
      <EventCard {...item} />
    )
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
        {/* <Calendar
          // minDate={todaysDate}
          disableAllTouchEventsForDisabledDays
          onDayPress={onDayPress}
          markedDates={markedDate}
          style={styles.calendar}
          theme={{
            arrowColor: AppColors.black,
            textSectionTitleColor: AppColors.black,
            monthTextColor: AppColors.black,
            todayTextColor: AppColors.black
          }}
        /> */}
      </View>
    </ScreenWrapper>
  );
}
