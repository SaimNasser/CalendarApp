import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import BottomTabs from './BottomTab/index';
import CreateEventScreen from '../screens/CreateEventScreen';
import notifee from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';





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

