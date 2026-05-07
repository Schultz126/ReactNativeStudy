import { StyleSheet, Platform } from "react-native";

const style = StyleSheet.create({
  mealContainer: {
    flex: 1,
    borderRadius: 4,
    width: "95%",
    padding: "1%",
    alignSelf: "center",
    margin: "2%",
    backgroundColor: "white",
    overflow: "hidden",
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
      },
      android: {
        elevation: 1,
      },
    }),
  },

  innerText: {},
});

export default style;
