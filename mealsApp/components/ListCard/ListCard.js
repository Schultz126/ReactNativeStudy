import { View, Text, StyleSheet } from "react-native";
import ListItem from "../ListItem/ListItem";
import Subtitle from "../Subtitle/Subtitle";

const ListCard = ({ children }) => {
  return <View style={styles.list}>{children}</View>;
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: "#f8f4f0",
    borderRadius: 8,
    padding: 8,
  },
});

export default ListCard;
