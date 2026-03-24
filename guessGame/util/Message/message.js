import { 
    Platform,
    Alert
} from "react-native";

const message = (title, text) => {
    if (Platform.OS === 'web') {
    alert(title);
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

export default message