import { 
	View,
	TextInput, 
	Alert,
	Platform
} from 'react-native';
import selectStyles from './selectStyles';
import MainButton from '../../components/mainButton';
import { useState } from 'react';

const NumberSelectScreen = () => {
	const [isFocused, setIsFocused] = useState(false);
	const [number, setNumber] = useState('');

	const message = (title, text) => {
		if (Platform.OS === 'web') {
        alert("Invalid Number");
		} else {
			Alert.alert( // Cria um pop-up para cofirmar a deleção do elemento selecionado
				title, // Título do pop-up
				text,
				[
					{ 
						text: 'Ok', 
						style: 'cancel' 
					},
				] // Vetor dos botões do alert
			);
		}
	}

	const handleConfirmButton = (testNumber) => {
		if(testNumber === '') return
		if(testNumber.includes('.') || testNumber.includes(',')) {
			message(
				"Invalid number",
				"Only natural numbers are allowed"
			)
			setNumber('');
		} else {
			setNumber(testNumber);
			console.log(number);
			setNumber('');
		}
	}
	return(
		<View style={selectStyles.container}>
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
	)
}

export default NumberSelectScreen;