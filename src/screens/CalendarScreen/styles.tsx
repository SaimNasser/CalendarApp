import { Platform, StyleSheet } from 'react-native';
import AppColors from '../../utills/AppColors';
import { width, height } from 'react-native-dimension'
const styles = StyleSheet.create({
  mainViewContainer: {
    // height: height(98),
    flex: 1
  },
  dateText: {
    fontSize: width(3.7),
    fontWeight: 'bold',
    marginLeft: width(5),
    marginVertical: height(1.5)
  },

});
export default styles;
