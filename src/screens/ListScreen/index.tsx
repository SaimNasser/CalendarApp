import { FlashList } from "@shopify/flash-list";
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, RefreshControl } from 'react-native';
import { width } from 'react-native-dimension';
import AntDesign from "react-native-vector-icons/AntDesign";
import Button from '../../components/Button';
import EventCard from '../../components/EventCard';
import FilterDropdown from '../../components/FilterDropdown';
import Header from '../../components/Header';
import ScreenWrapper from '../../components/ScreenWrapper';
import AppColors from '../../utills/AppColors';
import { eventTypes } from '../../utills/dummydata';
import { EventType } from '../../utills/Enums';
import { getAllEventsFromStorage } from "../../utills/Methods";
import { EventTypee } from "../../utills/Types";
import styles from './styles';
export default function ListScreen({ navigation, route }) {
  const [selectedFilter, setSelectedFilter] = useState<string>(EventType.ALL)
  const [lastIndex, setLastIndex] = useState<number | undefined>(0)
  const [refreshing, setRefreshing] = useState<boolean>(false)
  const [events, setEvents] = useState<EventTypee[] | undefined>([])

  useEffect(() => {
    setEvents([])
    setLastIndex(0)
    getAllEventsFromStorage(selectedFilter)
      .then((response) => {
        const events = response?.data
        setLastIndex(response?.lastIndex)
        setEvents(events)
      })
  }, [selectedFilter])
  const getFirstBatch = () => {
    setEvents([])
    setLastIndex(0)
    getAllEventsFromStorage(selectedFilter)
      .then((response) => {
        const events = response?.data
        setLastIndex(response?.lastIndex)

        setEvents(events)
      })
  }
  const onEndReached = () => {
    if (lastIndex === -1) return
    getAllEventsFromStorage(selectedFilter, lastIndex)
      .then((response) => {
        const newEvents: EventTypee[] | undefined = response?.data
        setLastIndex(response?.lastIndex)
        setEvents([...events, ...newEvents])
      })
  }
  const renderEvent = ({ item }) =>
    <EventCard
      {...item}
      resetList={getFirstBatch}
    />

  const renderFooterComponent = () =>
    lastIndex != -1 ? < ActivityIndicator size={'small'} color={AppColors.black} style={styles.padding} /> : <></>

  const renderEmpty = () =>
    <View style={styles.empty}>
      <Text style={styles.emptyText}>No events to show yet</Text>
    </View>
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
            onPress={() => navigation.navigate('CreateEventScreen', { getFirstBatch: getFirstBatch, edit: false })}
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
          data={events}
          ListEmptyComponent={renderEmpty}
          renderItem={renderEvent}
          estimatedItemSize={10}
          ListFooterComponent={renderFooterComponent}
          onEndReachedThreshold={0.5}
          onEndReached={onEndReached}
          refreshing={refreshing}
          refreshControl={<RefreshControl
            refreshing={refreshing}
            onRefresh={getFirstBatch}
          />}
        />
      </View>
    </ScreenWrapper>
  );
}
