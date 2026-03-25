import { useEffect, useState } from 'react';
import { 
  StyleSheet,
  StatusBar,
  ImageBackground,
  View 
} from 'react-native';
import {
  SafeAreaView,
} from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from './util/Colors/Colors';
import NumberSelectScreen from './screens/NumberSelectScreen/NumberSelectScreen';
import GameScreen from './screens/GameScreen/GameScreen';
import GameOverScreen from './screens/GameOverScreen/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(false);

  // Logic to switch screens
  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  // Determine which component to show
  let screen = <NumberSelectScreen userNumberHandler={pickedNumberHandler} />;

  if (gameIsOver) {
    screen = <GameOverScreen setGameIsOver={setGameIsOver} setUserNumber={setUserNumber}/>;
  } 
  // 2. Otherwise, if we have a number, we are playing
  else if (userNumber && !gameIsOver) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
  }

  return (
    <View style={styles.rootContainer}>
      <LinearGradient colors={[Colors.darkerPrimary, Colors.darkGreen]} style={styles.rootScreen}>
      <ImageBackground 
        source={require('./assets/images/background.png')} 
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>
          <StatusBar barStyle={'light-content'}/>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    </View>
    
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },

  backgroundImage: {
    opacity: 0.35 
  },

  rootContainer: {
    flex: 1,
    backgroundColor: '#000000'
  }
});
