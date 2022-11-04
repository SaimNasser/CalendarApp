import { StyleSheet } from 'react-native';
import AppColors from '../../utills/AppColors';
import { width, height } from 'react-native-dimension';

const styles = StyleSheet.create({
    modalContainer: {
        borderRadius: width(1.8),
        backgroundColor: AppColors.darkGrey,
        height: height(5.5),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: width(3)
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    filterText: {
        color: AppColors.white,
        fontSize: width(3.7),
        marginHorizontal: width(2),
        flex: 1
    },
    dropContainer: {
        width: '47%',
        maxHeight: height(18)
    },
    rowContainer: {
        paddingVertical: height(1),
        paddingHorizontal: width(3)
    },
    rowText: {
        fontSize: width(3.7)
    }
});
export default styles;
