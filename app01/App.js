import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { globalStyles } from './style';

export default function App() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.hello}>Hello, World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
