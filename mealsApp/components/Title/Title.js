import { Text, View, StyleSheet } from "react-native";

const Title = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    padding: 8,
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
  },
});

export default Title;
