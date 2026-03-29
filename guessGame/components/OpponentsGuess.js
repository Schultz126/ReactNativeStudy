import { 
    View,
    Text, 
    useWindowDimensions
} from "react-native";
import styles from "./componentStyles/opponentsGuessStyles";

const OpponentsGuess = ({machineNumber}) => {
    const { width, height } = useWindowDimensions()
    return(
        <View style={styles.container}>
            <Text style={[styles.title, height > width ? styles.titlePortrait : styles.titleLandscape]}>Is this your number?</Text>
            <View style={[styles.guessedNumberContainer, height > width ? styles.guessedNumberContainerPortrait : styles.guessedNumberContainerLandscape]}>
                <Text style={[styles.guessedNumber, height > width ? styles.guessedNumberPortrait: styles.guessedNumberLandscape]}>{machineNumber}</Text>
            </View>
        </View>
    )
}

export default OpponentsGuess