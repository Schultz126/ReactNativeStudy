import {
    StyleSheet,
    Platform
} from 'react-native';
import Colors from '../../util/Colors/Colors';

const styles = StyleSheet.create({
    gameIO: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 5,
        borderRadius: 24,
        borderColor: Colors.primaryBlack,
        padding: 10,
        backgroundColor: "#00000063"
    },
    container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        ...Platform.select({
            android: {
                marginTop: 20
            }
        }),
    },

    buttonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 15
    }
})

export default styles