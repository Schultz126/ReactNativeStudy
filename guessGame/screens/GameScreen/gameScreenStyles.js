import {
    StyleSheet
} from 'react-native';

const primary = "#B19206";
const darkerPrimary = "#766104"
const secondary = "#6D0D15";
const darkerSecondary = "#5B0B11";
const darkGreen = "#122404";
const primaryWhite = "#F3F4F6";
const primaryBlack = "#310C1F";

const styles = StyleSheet.create({
    gameIO: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 5,
        borderRadius: 24,
        borderColor: primaryBlack,
        padding: 10,
        backgroundColor: "#00000063"
    },
    container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 15
    }
})

export default styles