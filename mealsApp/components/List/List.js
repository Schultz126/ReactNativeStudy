import { View, Text, StyleSheet } from "react-native";
import ListItem from "../ListItem/ListItem";
import ListCard from "../ListCard/ListCard";
import Subtitle from "../Subtitle/Subtitle";

const List = ({ items, message }) => {
  return (
    <View style={styles.container}>
      <Subtitle title={message} />
      <ListCard>
        {items.map((item) => (
          <ListItem key={item} message={item} />
        ))}
      </ListCard>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    paddingHorizontal: 16,
  },
});

export default List;
