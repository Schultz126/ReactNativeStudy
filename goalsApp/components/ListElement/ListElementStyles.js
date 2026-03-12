import { StyleSheet } from "react-native";

const mainColor = '#E5DCC5'
const secondaryColor = '#C14953'
const cancelColor = '#e48088';

const listStyle = StyleSheet.create({
    elementContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 5,
        padding: 5,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: mainColor,
        borderRadius: 5,
    },
    textColorWhite: {color: 'white'},

    cancelButton: {
        color: cancelColor,
        borderColor: cancelColor,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 5,
    },
})

export default listStyle