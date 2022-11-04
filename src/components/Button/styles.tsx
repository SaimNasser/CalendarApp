import { StyleSheet } from 'react-native';
import AppColors from '../../utills/AppColors';
import { width, height } from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width(1.8),
    width: width(80),
    alignSelf: 'center',
    backgroundColor: AppColors.darkGrey,
  },
  text: {
    color: AppColors.white,
    fontSize: width(4),
    paddingVertical: height(1.5),
  },
  padding: { paddingHorizontal: width(1.5) }
});
export default styles;
