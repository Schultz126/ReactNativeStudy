import { 
    View,
    Text, 
} from "react-native";
import styles from "./componentStyles/opponentsGuessStyles";

const OpponentsGuess = ({machineNumber}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Is this your number?</Text>
            <View style={styles.guessedNumberContainer}>
                <Text style={styles.guessedNumber}>{machineNumber}</Text>
            </View>
        </View>
    )
}

export default OpponentsGuess