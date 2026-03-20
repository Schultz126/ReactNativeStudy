import { useState } from 'react';
import { 
  StyleSheet,
  StatusBar,
  ImageBackground, 
} from 'react-native';
import {
  SafeAreaView,
} from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import NumberSelectScreen from './screens/NumberSelectScreen/NumberSelectScreen';
import GameScreen from './screens/GameScreen/GameScreen';
import GameOverScreen from './screens/GameOverScreen/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const pickedNumberHandler = (pickedNuber) => {
    setUserNumber(pickedNuber);
  }
  let screen = <NumberSelectScreen userNumberHandler={pickedNumberHandler}/>
  if(userNumber) {
    screen = <GameScreen userNumber={userNumber}/>
  }

  return (
  <LinearGradient colors={['#766104', '#122404']} style={styles.rootScreen}>
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
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },

  backgroundImage: {
    opacity: 0.35 
  }
});
