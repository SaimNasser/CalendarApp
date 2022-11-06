import { StyleSheet } from 'react-native';
import { height, width } from 'react-native-dimension';
import AppColors from '../../utills/AppColors';
import { Fonts } from '../../utills/Enums';

const styles = StyleSheet.create({
  container: {
    height: height(8),
    backgroundColor: AppColors.white,
    width: width(100),
    shadowColor: AppColors.gray,
    shadowOffset: { width: 0, height: 3.5 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width(3),
  },
  title: {
    marginLeft: width(4),
    color: AppColors.black,
    fontSize: width(4.9),
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftBtn: {
    height: '100%',
    width: width(12),
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default styles;
