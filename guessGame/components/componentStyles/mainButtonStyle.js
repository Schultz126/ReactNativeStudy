import { 
    StyleSheet,
    Platform 
} from "react-native";

const primaryWhite = "#F3F4F6";
const prmaryButtonColor = "#183304";
const pressedButtonColor = "#1e3e05";

const mainButtonStyles = StyleSheet.create({
  button: {
    backgroundColor: prmaryButtonColor,
    paddingVertical: 16,
    minWidth: '45%', 
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center', 
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.12)',

    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  buttonPressed: {
    backgroundColor: pressedButtonColor,
    transform: [{ scale: 0.98 }],
  },
  text: {
    color: primaryWhite,
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: -0.2,
  },
});

export default mainButtonStyles;