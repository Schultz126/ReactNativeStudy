import { 
	View,
	TextInput, 
} from 'react-native';
import selectStyles from './selectStyles';
import MainButton from '../../components/mainButton';
import { useState } from 'react';

const NumberSelectScreen = () => {
	const [isFocused, setIsFocused] = useState(false);
	return(
		<View style={selectStyles.container}>
			<TextInput 
				style={[selectStyles.input, isFocused && selectStyles.inputIsFocused]}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				keyboardType='numeric'
				maxLength={3}/>
			<View style={selectStyles.buttonContainer}>
				<MainButton text={'Reset'}/>
				<MainButton text={'Confirm'}/>
			</View>
		</View>
	)
}

export default NumberSelectScreen;