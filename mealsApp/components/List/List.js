import { View, Text, StyleSheet } from "react-native";

const List = ({ items, message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{message}</Text>
      <View style={styles.list}>
        {items.map((item) => (
          <Text key={item} style={styles.item}>
            {item}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 8,
    color: "#333",
  },
  list: {
    backgroundColor: "#f8f4f0",
    borderRadius: 8,
    padding: 8,
  },
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

export default List;
