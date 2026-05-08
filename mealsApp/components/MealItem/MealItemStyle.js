import { StyleSheet, Platform } from "react-native";

const style = StyleSheet.create({
  mealContainer: {
    flex: 1,
    borderRadius: 4,
    width: "95%",
    padding: "1%",
    paddingBottom: "3%",
    alignSelf: "center",
    margin: "2%",
    backgroundColor: "#e6e6e6",
    overflow: "hidden",
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },

  innerText: {
    textAlign: "center",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 4,
  },

  textAffordable: { color: "rgb(84, 162, 0)" },

  textLuxurious: { color: "rgb(188, 0, 0)" },

  infoContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  infoText: {
    fontSize: 12,
  },

  pressedButton: {
    opacity: 0.7,
  },
});

export default style;
