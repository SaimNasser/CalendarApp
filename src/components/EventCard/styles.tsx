import { StyleSheet } from 'react-native';
import { height, width } from 'react-native-dimension';
import AppColors from '../../utills/AppColors';

const styles = StyleSheet.create({
    container: {
        width: width(95),
        minHeight: height(20),
        backgroundColor: AppColors.white,
        elevation: 5,
        alignSelf: 'center',
        marginBottom: height(1),
        marginTop: height(1),
        borderRadius: height(1),
        paddingHorizontal: width(4),
        paddingTop: height(1.5),
        paddingBottom: height(2),
    },
    title: {
        flex: 1,
        fontSize: width(4),
        color: AppColors.black,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    btnPadding: {
        padding: width(2),
    },
    subtext: {
        fontSize: width(3.7)
    },
    marginTop: { marginTop: height(1) }
});
export default styles;
