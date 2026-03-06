import { StyleSheet } from "react-native";

const mainColor = '#2B4570'
const secondaryColor = '#DD1C1A'

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
        borderColor: '#cccccc',
        borderRadius: 5,
    },
    textColorBlue: {color: mainColor},

    textColorRed : {color: secondaryColor},

    button: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: secondaryColor,
        borderRadius: 5,
        backgroundColor: '#ffffff'
    }
})

export default listStyle