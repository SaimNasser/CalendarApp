import React from 'react';
import Routes from './Routes/index';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import FlashMessage from 'react-native-flash-message';
import { LogBox } from 'react-native';
import notifee from '@notifee/react-native';
LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
      <FlashMessage position="bottom" icon="auto" />
    </Provider>
  );
}
