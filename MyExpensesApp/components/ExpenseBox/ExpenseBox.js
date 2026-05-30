import { Pressable, Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ExpenseBox = ({ expense, value, onDelete, id }) => {
  const navigate = useNavigation();

  function handlePress() {
    navigate.navigate("edit", {
      expense: expense, // Parâmetros usados para teste. Na prática apenas id será necessário
      value: value,
      id: id,
    });
  }

  return (
    <View style={styles.cardContainer}>
      <Pressable
        style={({ pressed }) => [styles.card, pressed && styles.pressed]}
        android_ripple={{ color: "#ccc" }}
        onPress={handlePress}
      >
        <View style={styles.infoContainer}>
          <Text style={styles.expenseText}>{expense}</Text>
          <Text style={styles.valueText}>
            R$ {parseFloat(value).toFixed(2)}
          </Text>
        </View>
        <Pressable onPress={onDelete} style={styles.deleteButton}>
          <Ionicons name="trash-outline" size={22} color="#ff4444" />
        </Pressable>
      </Pressable>
    </View>
  );
};

export default ExpenseBox;

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    margin: "2%",
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
  },
  pressed: {
    opacity: 0.75,
  },
  infoContainer: {
    flex: 1,
  },
  expenseText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  valueText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#2e7d32",
  },
  deleteButton: {
    padding: 8,
    marginLeft: 8,
  },
});
