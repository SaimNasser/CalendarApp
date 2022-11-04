import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import BottomTabs from './BottomTab/index';
const Stack = createStackNavigator();
export default function Routes() {
  useEffect(() => {
    SplashScreen.hide();

  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomTabs" headerMode="none">
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

