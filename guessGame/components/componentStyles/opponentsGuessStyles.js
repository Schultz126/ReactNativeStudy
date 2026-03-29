import { 
    StyleSheet 
} from "react-native";
import Colors from "../../util/Colors/Colors";

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
        borderBottomWidth: 5,
        borderRadius: 6,
        borderColor: Colors.primaryWhite,
    },

    guessedNumberContainerLandscape: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 200,
        borderBottomWidth: 3,
        borderRadius: 6,
        borderColor: Colors.primaryWhite,
        marginBottom: 10,
    },

    guessedNumberContainerPortrait: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 200,
        borderBottomWidth: 5,
        borderRadius: 6,
        borderColor: Colors.primaryWhite,
        marginBottom: 20,
    },

    guessedNumber: {
        fontWeight: 'bold',
        color: Colors.primaryWhite
    },

    guessedNumberLandscape: {
        fontSize: 24,
    },

    guessedNumberPortrait: {
        fontSize: 32,
    },

    title: {
        color: Colors.primary,
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
    },

    titlePortrait: {
        fontSize: 25,
    },

    titleLandscape: {
        fontSize: 24,
    }
})

export default styles