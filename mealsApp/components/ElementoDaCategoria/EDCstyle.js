import { StyleSheet, Platform } from "react-native";

const style = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    backgroundColor: "white", // Sem a cor do fundo a sombra fica terrívelmente feia
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
      },
      android: {
        elevation: 7,
      },
    }),
  },

  button: {
    flex: 1,
  },

  buttonPressed: {
    opacity: 0.5,
  },

  innerContainer: {
    flex: 1,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },

  innerText: {
    fontWeight: "bold",
  },
});

export default style;
