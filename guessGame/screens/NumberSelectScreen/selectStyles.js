import { 
    StyleSheet,
    Platform,
 } from "react-native";
import Colors from "../../util/Colors/Colors";

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
        backgroundColor: Colors.darkGreen,
        height: 180,

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
        borderColor: Colors.primary,
        borderRadius: 4,
        paddingHorizontal: 15,
        fontSize: 16,
        minWidth: '40%',
        color: Colors.primary,
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
    },

    inputIsFocused: {
        borderBottomWidth: 2,
        borderColor: Colors.darkerPrimary,
    },

    buttonContainer: {
        display:'flex',
        flexDirection: 'row',
        gap: 5,
    },

    outContainer: {
    flex: 1,
    alignItems: 'center',
  
  },

  outLandscape: {
    marginTop: 20,
  },

  outPortrait: {
    marginTop: 70,
    gap: 20
  },

  subtitle: {
    color: Colors.darkerPrimary,
    marginTop: 2,
    fontSize: 24,
    fontFamily: 'open-sans'
  },
  
  keyboardAvoStyles: {
    flex: 1
  },

  scrollOut: {
    flex: 1,
    marginTop: '1%'
  }
})

export default selectStyles