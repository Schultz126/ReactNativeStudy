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
import Message from "../../components/Message/Message";
import Colors from "../../utils/Colors/Colors";

// Explicação da flag: como o visual do input é o mesmo para a tela de EditExpenses e AddExpenses, as as funções utilizadas possuem valores diferentes de parâmetros, implementei uma flag que funciona da seguinte forma :
//  1 - Modo de inserção
//  Outro valor - Modo de modificação
const ExpensesInput = ({ expense, value, id, inputFunction, flag }) => {
  const [newExpense, setNewExpense] = useState("");
  const [amount, setAmount] = useState(""); // Kept as a string for TextInput compatibility

  const navigate = useNavigation();

  function handlePress() {
    const parsedValue = parseFloat(amount);

    if (!newExpense.trim() || isNaN(parsedValue) || parsedValue <= 0) {
      return;
    }
    flag === 1
      ? inputFunction({ expense: newExpense.trim(), amount: parsedValue })
      : inputFunction(id, {
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
            placeholder={`${expense}`}
            placeholderTextColor="#999"
            onChangeText={setNewExpense}
            amount={newExpense}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Amount ($)</Text>
          <TextInput
            style={styles.input}
            placeholder={`${value}`}
            placeholderTextColor="#999"
            keyboardType="decimal-pad" // Better than 'numeric' on iOS as it includes decimals
            onChangeText={setAmount} // Keeps state as raw text string safely
            amount={amount}
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

export default ExpensesInput;

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
