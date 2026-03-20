import { 
    View,
} from 'react-native';
import styles from './gameScreenStyles';
import MainButton from '../../components/mainButton';
import OpponentsGuess from '../../components/OpponentsGuess';
import { useRef, useState } from 'react';

function generateRandomBetween(min, max, exclude) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

const GameScreen = ({userNumber}) => {
    const min = useRef(1)
    const max = useRef(999)
    const initialGuess = generateRandomBetween(min.current, max.current, userNumber)
    const [guessedNumber, setGuessedNumber] = useState(initialGuess)
    
    return(
        <View style={styles.container}>
            <View style={styles.gameIO}>
                <OpponentsGuess machineNumber={guessedNumber}/>
                <View style={styles.buttonsContainer}>
                    <MainButton text={"Lower"}/>
                    <MainButton text={"Higher"}/>
                </View>
            </View>
        </View>
    )
}

export default GameScreen;