import React from 'react';
import { View, Text } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import AppColors from '../../utills/AppColors';
import styles from './styles';

export default function Dashboard({ navigation, route }) {

  return (
    <ScreenWrapper
      statusBarColor={AppColors.white}
      barStyle='dark-content'>
      <View style={styles.mainViewContainer}>
      </View>
    </ScreenWrapper >
  );
}
