import { 
  StyleSheet,
  StatusBar,
  ImageBackground 
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import NumberSelectScreen from './screens/NumberSelectScreen/NumberSelectScreen';

export default function App() {
  return (
    <LinearGradient colors={['#766104', '#122404']} style={styles.rootScreen}>
      <ImageBackground 
        source={require('./assets/images/background.png')} 
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}>
        <StatusBar barStyle={'light-content'}/>
        <NumberSelectScreen />
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
