import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Map from '../screens/Map';
import {useSelector} from 'react-redux';
import Loader from '../components/Loader'
const Stack = createStackNavigator();
export default function Routes() {
    const isLogin = useSelector(state => state.Auth.isLogin)
  return (
    <NavigationContainer>
      <Loader/>
      {!isLogin ? (
        <Stack.Navigator initialRouteName="Login" headerMode="none">
          <Stack.Screen name="Login" component={Home} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Dashboard" headerMode="none">
          <Stack.Screen name="Dashboard" component={Map} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
