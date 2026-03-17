import { StyleSheet, Text, View } from 'react-native';
import NumberSelectScreen from './screens/NumberSelectScreen/NumberSelectScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <NumberSelectScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 50
  },
});
