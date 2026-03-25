import { View, Text, Animated } from 'react-native';
import { useEffect, useRef } from 'react';
import MainButton from '../../components/mainButton';
import styles from './GameOverStyles';

const GameOverScreen = ({ setGameIsOver, setUserNumber, numberOfGuesses }) => {
  // 1. Create Animated Values
  const titleScale = useRef(new Animated.Value(0)).current;
  const contentOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // 2. Define the Animation Sequence
    Animated.sequence([
      // First, pop the title
      Animated.spring(titleScale, {
        toValue: 1,
        tension: 50,
        friction: 7,
        useNativeDriver: true, // Better performance
      }),
      // Then, fade in the rest
      Animated.timing(contentOpacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleReturnButton = () => {
    setUserNumber(null);
    setGameIsOver(false);
    numberOfGuesses.current = 0
  };

  return (
    <View style={styles.screenContainer}>
      {/* 3. Wrap elements in Animated.View */}
      <Animated.View style={{ transform: [{ scale: titleScale }] }}>
        <Text style={styles.title}>GAME OVER!</Text>
      </Animated.View>
      
      <Animated.View style={[styles.summaryContainer, { opacity: contentOpacity }]}>
        <Text style={styles.summaryText}>
          Your cellphone took 
          <Text style={styles.highlight}> {numberOfGuesses.current} </Text> 
          rounds to guess the number you chose!
        </Text>
      </Animated.View>

      <Animated.View style={{ opacity: contentOpacity }}>
        <MainButton text={"NEW GAME"} action={handleReturnButton} />
      </Animated.View>
    </View>
  );
};

export default GameOverScreen