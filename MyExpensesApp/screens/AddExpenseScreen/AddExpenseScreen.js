import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import ActionButton from "../../components/ActionButton/ActionButton";
import { ExpensesContext } from "../../store/Context/ExpensesCTX";
import Message from "../../components/Message/Message";
import Colors from "../../utils/Colors/Colors";

const AddExpenseScreen = () => {
  const [newExpense, setNewExpense] = useState("");
  const [value, setValue] = useState(""); // Kept as a string for TextInput compatibility
  const [errorMessage, setErrorMessage] = useState(""); // Track validation feedback

  const navigate = useNavigation();
  const { addExpense } = useContext(ExpensesContext);

  function handlePress() {
    const parsedValue = parseFloat(value);

    if (!newExpense.trim() || isNaN(parsedValue) || parsedValue <= 0) {
      setErrorMessage("Please enter a valid expense name and amount.");
      return;
    }

    // Clear error if validation passes
    setErrorMessage("");

    addExpense({
      expense: newExpense.trim(),
      amount: parsedValue,
    });

    navigate.goBack();
  }

  return (
    // KeyboardAvoidingView prevents the keyboard from hiding the input fields on smaller screens
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.outerContainer}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.formGroup}>
          <Text style={styles.label}>Expense Name</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., Groceries"
            placeholderTextColor="#999"
            onChangeText={setNewExpense}
            value={newExpense}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Amount ($)</Text>
          <TextInput
            style={styles.input}
            placeholder="0.00"
            placeholderTextColor="#999"
            keyboardType="decimal-pad" // Better than 'numeric' on iOS as it includes decimals
            onChangeText={setValue} // Keeps state as raw text string safely
            value={value}
          />
        </View>

        <View style={styles.buttonContainer}>
          <ActionButton
            text="ADD EXPENSE"
            onPress={handlePress}
            color={Colors.addButton}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddExpenseScreen;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: Colors.bgWhite,
  },
  scrollContainer: {
    padding: 24,
    gap: 20,
  },
  formGroup: {
    width: "100%",
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#4A4A4A",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    color: Colors.inputColor,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  buttonContainer: {
    marginTop: 12,
  },
});
