import { 
	View,
	TextInput, 
	Keyboard,
	Text
} from 'react-native';
import selectStyles from './selectStyles';
import MainButton from '../../components/mainButton';
import { useState } from 'react';
import message from '../../util/Message/message';
import Title from '../../components/Title';

const NumberSelectScreen = ({userNumberHandler}) => {
	const [isFocused, setIsFocused] = useState(false);
	const [number, setNumber] = useState('');

	const handleConfirmButton = (testNumber) => {
		Keyboard.dismiss()
		if(testNumber === '') return
		if(testNumber.includes('.') || testNumber.includes(',') || testNumber <= 0) {
			message(
				"Invalid number",
				"Only natural numbers are allowed"
			)
			setNumber('');
		} else {
			userNumberHandler(testNumber)
			setNumber('');
		}
	}
	return(
		<View style={selectStyles.outContainer}>
			<Title>Guess My Number</Title>
			<View style={selectStyles.container}>
			<Text style={selectStyles.subtitle}>Enter a number</Text>
			<TextInput 
				style={[selectStyles.input, isFocused && selectStyles.inputIsFocused]}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				keyboardType='numeric'
				maxLength={2}
				value={number}
				onChangeText={(value) => setNumber(value)}/>
				<View style={selectStyles.buttonContainer}>
					<MainButton 
						text={'Reset'}
						action={() => {setNumber('')}}/>
					<MainButton 
						text={'Confirm'}
						action={() => handleConfirmButton(number)}/>
				</View>
			</View>
		</View>
	)
}

export default NumberSelectScreen;