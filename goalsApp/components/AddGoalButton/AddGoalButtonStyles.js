import { StyleSheet } from "react-native";

const mainColor = '#2B4570'
const addButtonStyles = StyleSheet.create({
    button: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ffffff',
        borderRadius: 5,
        backgroundColor: 'white'
    },

    textColorWhite: {
        color: mainColor
    },

    buttonContainer: {
        display: "flex",
        flexDirection: 'row'
    },
});

export default addButtonStyles