import { StyleSheet } from 'react-native';
import { height, width } from 'react-native-dimension';
import AppColors from '../../utills/AppColors';

const styles = StyleSheet.create({
    container: {
        width: width(95),
        // minHeight: height(20),
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
    marginTop: { marginTop: height(1) },
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
        flex: 1,
        marginRight: width(2)
    },
    icon: {
        width: '12.5%',
        height: '100%',
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    typetext: {
        paddingTop: height(1.5),
        fontWeight: 'bold',
        alignSelf: 'flex-end'
    }
});
export default styles;
