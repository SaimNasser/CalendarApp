import { StyleSheet } from 'react-native';
import AppColors from '../../utills/AppColors';
import { width, height } from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
    marginTop: height(1.5),
    alignSelf: 'center',
  },
  textInput: {
    width: width(85),
    borderRadius: width(2),
    paddingHorizontal: width(4),
    borderWidth: 0.75,
    borderColor: AppColors.black,
  },
  label: {
    marginLeft: width(1),
    marginBottom: height(0.5),
    fontWeight: 'bold'
  },
  error: {
    marginLeft: width(1),
    marginTop: height(0.5),
    fontWeight: 'bold'
  }
});
export default styles;
