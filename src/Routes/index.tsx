import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import BottomTabs from './BottomTab/index';
import CreateEventScreen from '../screens/CreateEventScreen';
import notifee from '@notifee/react-native';

// notifee.onForegroundEvent(async observer => {
//   console.log('Foreground event', observer)
//   // notifee.displayNotification()

//   return Promise.resolve()
// })
notifee.onBackgroundEvent(async ({ detail, type }) => {

  console.log('Background event')
  try {
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    await notifee.displayNotification({
      id: 'XYZ123',
      title: 'Hello',
      body: '123',
      ios: {
        sound: 'calling.mp3',
      },
      android: {
        channelId: channelId,
      },
    });
  } catch (error) {
    console.log(error)
  }

  return Promise.resolve()

})

const Stack = createStackNavigator();
export default function Routes() {
  useEffect(() => {
    SplashScreen.hide();
    notifee.requestPermission()
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomTabs" headerMode="none">
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen name="CreateEventScreen" component={CreateEventScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

