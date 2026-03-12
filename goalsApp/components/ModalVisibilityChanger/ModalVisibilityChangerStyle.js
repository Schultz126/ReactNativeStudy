import { StyleSheet } from "react-native";

const secondaryColor = "#E5DCC5";
const addColor = '#c5e5cf';
const cancelColor = '#e48088';

const modalButtonStyle = StyleSheet.create({
    button: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: addColor,
        color: addColor,
        textAlign: 'center'
    },

    logo: {
        width: 140,
        height: 140,
        margin: 3
    },
})

export default modalButtonStyle