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
        height: 100,
        width: 200,
        borderBottomWidth: 5,
        borderRadius: 6,
        borderColor: Colors.primaryWhite,
        marginBottom: 20,
    },

    guessedNumber: {
        fontWeight: 'bold',
        fontSize: 32,
        color: Colors.primaryWhite
    },

    title: {
        color: Colors.primary,
        textAlign: 'center',
        fontSize: 25,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
    }
})

export default styles