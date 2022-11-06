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
  }
});
export default styles;
