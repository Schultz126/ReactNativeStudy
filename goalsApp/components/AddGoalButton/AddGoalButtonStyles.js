import { StyleSheet } from "react-native";

const mainColor = '#E5DCC5';
const addColor = 'rgb(197, 229, 207)';
const cancelColor = '#e48088';
const addButtonStyles = StyleSheet.create({
    addButton: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: addColor,
        color: addColor
    },

    cancelButton: {
        color: cancelColor,
        borderColor: cancelColor,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 5,
    },

    buttonContainer: {
        display: "flex",
        flexDirection: 'row',
        gap: 15
    },
});

export default addButtonStyles