import { 
	View,
	TextInput, 
	Keyboard,
	Text,
	useWindowDimensions,
	KeyboardAvoidingView,
	ScrollView
} from 'react-native';
import selectStyles from './selectStyles';
import MainButton from '../../components/mainButton';
import { useState } from 'react';
import message from '../../util/Message/message';
import Title from '../../components/Title';

const NumberSelectScreen = ({userNumberHandler}) => {
	const [isFocused, setIsFocused] = useState(false);
	const [number, setNumber] = useState('');
	const {height, width} = useWindowDimensions()

	const handleConfirmButton = (testNumber) => {
		Keyboard.dismiss()
		if(testNumber === '') return
		if(testNumber.includes('.') || testNumber.includes(',') || testNumber <= 0) { //Testa se o número é um inteiro, ou se realmente é um número
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
		<ScrollView style={selectStyles.scrollOut}>
			<KeyboardAvoidingView style={selectStyles.keyboardAvoStyles} behavior='position'>
				<View style={[selectStyles.outContainer, height > width ? selectStyles.outPortrait : selectStyles.outLandscape]}> 
					<Title>Guess My Number</Title>
					<View style={selectStyles.container}>
					<Text style={selectStyles.subtitle}>Enter a number</Text>
					<TextInput 
						style={[selectStyles.input, isFocused && selectStyles.inputIsFocused]}
						onFocus={() => setIsFocused(true)}
						onBlur={() => setIsFocused(false)}
						keyboardType='numeric'
						maxLength={3}
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
			</KeyboardAvoidingView>
		</ScrollView>
	)
}

export default NumberSelectScreen;