import React from 'react';
import Routes from './Routes/index';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import FlashMessage from 'react-native-flash-message';
import { LogBox } from 'react-native';
import notifee from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';
LogBox.ignoreAllLogs(true);

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
    }).then(() => { return })
  } catch (error) {
    console.log(JSON.stringify(error))
    return
  }
  return Promise.resolve()
})
export default function App() {
  return (
    <Provider store={store}>
      <Routes />
      <FlashMessage position="bottom" icon="auto" />
    </Provider>
  );
}
