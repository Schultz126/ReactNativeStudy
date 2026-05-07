import { StyleSheet, Platform } from "react-native";

const style = StyleSheet.create({
  mealContainer: {
    flex: 1,
    borderRadius: 4,
    width: "95%",
    padding: "1%",
    alignSelf: "center",
    margin: "2%",
    backgroundColor: "#eee",
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

  innerText: {
    textAlign: "center",
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 4,
  },
});

export default style;
