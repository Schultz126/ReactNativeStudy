import { 
    View,
    Text
} from "react-native"
import roundStyles from "./componentStyles/roundsStyles"

const GuessedRound = ({round, number}) => {
    return(
        <View style={roundStyles.container}>
            <Text style={[roundStyles.text, roundStyles.roundNumber]}># {round}</Text>
            <Text style={[roundStyles.text, roundStyles.number]}>{number}</Text>
        </View>
    )
}

export default GuessedRound