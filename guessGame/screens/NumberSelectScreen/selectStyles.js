import { 
    StyleSheet,
    Platform
 } from "react-native";

const selectStyles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        marginTop: 50,
        marginBottom: 50,
        borderWidth: 1,
        borderColor: '#00000043',
        borderRadius: 8, 
        padding: 10,

        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: {width: 0, height: 2},
                shadowRadius: 6,
                shadowOpacity: 0.25
            },
            android: {
                elevation: 0
            },
        }),
    },

    input: {
        height: 50,
        borderBottomWidth: 1,
        borderColor: '#BB0A21',
        borderRadius: 4,
        paddingHorizontal: 15,
        fontSize: 16,
        backgroundColor: '#fff',
        minWidth: '40%',
        color: '#BB0A21',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center'
    },

    inputIsFocused: {
        borderBottomWidth: 2,
        borderColor: '#ce0a24',
    },

    buttonContainer: {
        display:'flex',
        flexDirection: 'row',
        gap: 5,
    }
})

export default selectStyles