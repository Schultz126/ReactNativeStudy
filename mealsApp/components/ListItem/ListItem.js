import { Text, StyleSheet } from "react-native";

const ListItem = ({ message }) => {
  return <Text style={style.item}>{message}</Text>;
};

const style = StyleSheet.create({
  item: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 6,
    backgroundColor: "#ffffff",
    borderRadius: 6,
    color: "#222",
    fontSize: 14,
  },
});

export default ListItem;
