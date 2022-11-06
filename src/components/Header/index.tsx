import React from 'react';
import {
  Platform, Text, TouchableOpacity, View
} from 'react-native';
import { height } from 'react-native-dimension';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppColors from '../../utills/AppColors';
import styles from './styles';
import { width } from 'react-native-dimension';
const Header = ({
  title,
  back = false,
  onLeftPress = () => { },
  shadow = true,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          marginBottom: Platform.OS == 'ios' ? (shadow ? 3.5 : 0) : 0,
        },
      ]}>
      {back &&
        <TouchableOpacity onPress={onLeftPress} activeOpacity={0.5} style={styles.leftBtn}>
          <AntDesign name={'arrowleft'} size={height(3.3)} />
        </TouchableOpacity>}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;
