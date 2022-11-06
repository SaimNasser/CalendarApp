import { Platform, StyleSheet } from 'react-native';
import AppColors from '../../utills/AppColors';
import { width, height } from 'react-native-dimension'
const styles = StyleSheet.create({
  mainViewContainer: {
    // height: height(98),
    flex: 1
  },
  dateText: {
    fontSize: width(3.5),
    color: AppColors.black
  },
  createBtn: {
    marginTop: height(2)
  },
  docContainer: {
    width: width(85),
    height: height(5),
    borderColor: AppColors.black,
    borderWidth: 0.75,
    borderRadius: width(2),
    alignSelf: 'center',
    marginTop: height(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  docViewContainer: {
    width: width(85),
    height: height(5),
    borderColor: AppColors.black,
    borderWidth: 0.75,
    borderRadius: width(2),
    alignSelf: 'center',
    marginTop: height(2),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width(3)
  },
  attachText: {
    marginLeft: width(1.5)
  },
  docName: {
    // flex: 1,
    width: '75%',
    marginRight: width(2)
  },
  icon: {
    width: '12.5%',
    height: '100%',
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputContainer: {
    width: width(85),
    height: height(5),
    borderWidth: 0.75,
    borderColor: AppColors.black,
    alignSelf: 'center',
    marginTop: height(1.5),
    borderRadius: width(2),
    flexDirection: 'row'
  },
  leftInputSection: {
    borderTopLeftRadius: width(2),
    borderBottomLeftRadius: width(2),
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 0.75,
    width: '28%',
    height: '100%',
  },
  rightInputSection: {
    width: '72%',
    height: '100%',
    borderTopRightRadius: width(2),
    borderBottomRightRadius: width(2),
    alignItems: 'center',
  },
  selectText: {
    color: AppColors.black,
    fontWeight: 'bold',
  },
  selectBtn: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    width: width(20)
  },
  dateContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  label: {
    marginLeft: width(1),
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: height(1.5),
    marginBottom: height(1.5),
  },
});
export default styles;
