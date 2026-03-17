import { 
    StyleSheet,
    Platform 
} from "react-native";

const mainButtonStyles = StyleSheet.create({
  button: {
    backgroundColor: '#1A1A1A',
    paddingVertical: 16,
    minWidth: 150, 
    borderRadius: 14,
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
    backgroundColor: '#2A2A2A',
    transform: [{ scale: 0.96 }],
  },
  text: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: -0.2,
  },
});

export default mainButtonStyles;