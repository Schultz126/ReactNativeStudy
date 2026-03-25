import { 
    StyleSheet,
    Platform
 } from "react-native";
import Colors from "../../util/Colors/Colors";

const primary = "#B19206";
const darkerPrimary = "#766104"
const secondary = "#6D0D15";
const darkerSecondary = "#5B0B11";
const darkGreen = "#122404";
const primaryWhite = "#F3F4F6";
const primaryBlack = "#310C1F";

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
        backgroundColor: darkGreen,
        height: 170,

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
        borderColor: primary,
        borderRadius: 4,
        paddingHorizontal: 15,
        fontSize: 16,
        minWidth: '40%',
        color: primary,
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
    },

    inputIsFocused: {
        borderBottomWidth: 2,
        borderColor: darkerPrimary,
    },

    buttonContainer: {
        display:'flex',
        flexDirection: 'row',
        gap: 5,
    },
    outContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 70,
    gap: 20
  },

  subtitle: {
    color: Colors.darkerPrimary,
    marginTop: 2
  }
})

export default selectStyles