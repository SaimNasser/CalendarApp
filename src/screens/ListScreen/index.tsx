import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { width } from 'react-native-dimension';
import AntDesign from "react-native-vector-icons/AntDesign";
import Button from '../../components/Button';
import FilterDropdown from '../../components/FilterDropdown';
import Header from '../../components/Header';
import ScreenWrapper from '../../components/ScreenWrapper';
import AppColors from '../../utills/AppColors';
import { eventList, eventTypes } from '../../utills/dummydata';
import { EventType } from '../../utills/Enums';
import { FlashList } from "@shopify/flash-list";
import styles from './styles';
import EventCard from '../../components/EventCard';
import { height } from 'react-native-dimension'

export default function ListScreen({ navigation, route }) {
  const [selectedFilter, setSelectedFilter] = useState(EventType.ALL)
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
          title={'My Events Listing'}
          shadow={true}
        />}>
      <View style={styles.mainViewContainer} >
        <View style={[styles.row, styles.marginTop]}>
          <FilterDropdown
            options={eventTypes}
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter} />
          <Button
            title='Create Event'
            onPress={() => navigation.navigate('CreateEventScreen')}
            containerStyle={styles.titleBtns}
            leftIcon={() =>
              <AntDesign
                name={'pluscircleo'}
                color={'white'}
                size={width(3.7)}
              />}
          />
        </View>
        <FlashList
          data={eventList}
          renderItem={renderEvent}
          estimatedItemSize={10}
        />
      </View>
    </ScreenWrapper>
  );
}
