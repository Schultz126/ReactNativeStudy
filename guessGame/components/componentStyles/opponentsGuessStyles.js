import { 
    StyleSheet 
} from "react-native";

const primary = "#B19206";
const darkerPrimary = "#766104"
const secondary = "#6D0D15";
const darkerSecondary = "#5B0B11";
const darkGreen = "#122404";
const primaryWhite = "#F3F4F6";
const primaryBlack = "#310C1F";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    guessedNumberContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: primaryWhite,
        height: 100,
        width: 200,
        borderWidth: 1,
        borderRadius: 24,
        margin: 10,
    },

    guessedNumber: {
        fontWeight: 'bold',
        fontSize: 32,
        color: secondary
    },

    title: {
        color: primary,
        textAlign: 'center',
        fontSize: 25,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
    }
})

export default styles