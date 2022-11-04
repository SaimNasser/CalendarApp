import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import Home from '../screens/Home';

const Stack = createStackNavigator();
export default function Routes() {
  useEffect(() => {
    SplashScreen.hide();
   
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

