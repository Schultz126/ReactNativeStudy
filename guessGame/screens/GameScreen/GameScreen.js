import { 
    View,
    FlatList,
    useWindowDimensions
} from 'react-native';
import { 
    useRef, 
    useState,
    useEffect 
} from 'react';
import GuessedRound from '../../components/GuessedRound';
import styles from './gameScreenStyles';
import MainButton from '../../components/mainButton';
import OpponentsGuess from '../../components/OpponentsGuess';
import message from '../../util/Message/message';
import { Ionicons } from '@expo/vector-icons'


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
    const max = useRef(1000)
    const initialGuess = generateRandomBetween(min.current, max.current, userNumber)
    const [guessedNumber, setGuessedNumber] = useState(initialGuess)
    const [guessedRounds, setGuessedRounds] = useState([initialGuess])
    const {width, height} = useWindowDimensions()

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
    const newGuess = generateRandomBetween(min.current, max.current, guessedNumber)
    setGuessedNumber(newGuess)
    numberOfGuesses.current += 1
    setGuessedRounds((prevNums) => [newGuess, ...prevNums])
}
    
    return(
        <View style={styles.container}>
            <View style={styles.gameIO}>
                <OpponentsGuess machineNumber={guessedNumber}/>
                <View style={styles.buttonsContainer}>
                    <MainButton text={<Ionicons name="remove" size={24}/>} action={() => changeBotNumber(0)}/>
                    <MainButton text={<Ionicons name="add" size={24}/>} action={() => changeBotNumber(1)}/>
                </View>
            </View>
            <View style={styles.roundsContainer}>
                <FlatList 
                    data={guessedRounds}
                    renderItem={(itemData) => 
                        <GuessedRound 
                            round={guessedRounds.length - itemData.index} 
                            number={itemData.item}/>}
                />
            </View>
        </View>
    )
}

export default GameScreen;