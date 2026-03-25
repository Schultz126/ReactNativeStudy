import { 
    View,
} from 'react-native';
import { 
    useRef, 
    useState,
    useEffect 
} from 'react';
import styles from './gameScreenStyles';
import MainButton from '../../components/mainButton';
import OpponentsGuess from '../../components/OpponentsGuess';
import message from '../../util/Message/message';


function generateRandomBetween(min, max, exclude) { // Auxiliary function outside of the component so it does not re-render
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

function lyingMessage() {
    message(
        "You know you're lying",
        "Please take this serious"
    )
}

const GameScreen = ({userNumber, onGameOver, numberOfGuesses}) => {
    const min = useRef(1)
    const max = useRef(100)
    const initialGuess = generateRandomBetween(min.current, max.current, userNumber)
    const [guessedNumber, setGuessedNumber] = useState(initialGuess)

    useEffect(() => {
        if(guessedNumber == userNumber) { // Use == no lugar de ===, pq o número do usuário é uma string e o da máquina um int
            onGameOver()
        }
    },[guessedNumber, userNumber, onGameOver])

    const changeBotNumber = (input) => {
    switch(input) {
        case 0: // botão "Lower" foi selecionado
            if(userNumber > guessedNumber) {
                lyingMessage()
                return;
            } else {
                max.current = guessedNumber - 1
            }
            break
        case 1: // botão "Higher" foi selecionado
            if(userNumber < guessedNumber) {
                lyingMessage()
                return;
            } else {
                min.current = guessedNumber + 1   
            }
            break
    }
    setGuessedNumber(generateRandomBetween(min.current, max.current, guessedNumber))
    numberOfGuesses.current += 1
    console.log(numberOfGuesses.current)
}
    
    return(
        <View style={styles.container}>
            <View style={styles.gameIO}>
                <OpponentsGuess machineNumber={guessedNumber}/>
                <View style={styles.buttonsContainer}>
                    <MainButton text={"Lower"} action={() => changeBotNumber(0)}/>
                    <MainButton text={"Higher"} action={() => changeBotNumber(1)}/>
                </View>
            </View>
        </View>
    )
}

export default GameScreen;