import { View, Text, Pressable, TextInput, ImageBackground } from 'react-native';
import selectStyles from './selectStyles';

const NumberSelectScreen = () => {
	return(
		<View style={selectStyles.container}>
			<Text>Select a number</Text>
			<TextInput />
			<View>
			<Pressable>
				<Text>Confirm</Text>
			</Pressable>
			<Pressable>
				<Text>Cancel</Text>
			</Pressable>    
			</View>
		</View>
	)
}

export default NumberSelectScreen;