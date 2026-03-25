import { 
    View,
    Text
} from 'react-native';
import MainButton from '../../components/mainButton';

const GameOverScreen = ({setGameIsOver, setUserNumber}) => {
    const handleReturnButton = () => {
        setUserNumber(null)
        setGameIsOver(false)

    }
    return(
        <View>
            <Text>Game Over</Text>
            <MainButton text={"Return"} action={handleReturnButton}></MainButton>
        </View>
    )
}

export default GameOverScreen;