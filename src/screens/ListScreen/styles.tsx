import { Platform, StyleSheet } from 'react-native';
import AppColors from '../../utills/AppColors';
import { width, height } from 'react-native-dimension'
const styles = StyleSheet.create({
  mainViewContainer: {
    // height: height(98),
    flex: 1
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: width(100),
    padding: width(3)
  },
  titleBtns: {
    width: '48%'
  },
  marginTop: {
    marginTop: height(1)
  },
  flatlist: {
    width: width(100),
  }
});
export default styles;
