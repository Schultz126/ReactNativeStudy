import { View, Text, TextInput } from "react-native";
import { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import ActionButton from "../../components/ActionButton/ActionButton";
import { ExpensesContext } from "../../store/Context/ExpensesCTX";

const AddExpenseScreen = () => {
  const [newExpense, setNewExpense] = useState("");
  const [value, setValue] = useState("");
  const navigate = useNavigation();
  const { addExpense } = useContext(ExpensesContext);

  function handlePress() {
    if (!newExpense || !value) {
      console.log("Expense and value are mandatory");
    } else {
      addExpense({ expense: newExpense, amount: parseFloat(value) });
      console.log(`expense ${newExpense} with value ${value} added`);
      navigate.goBack();
    }
  }

  return (
    <View>
      <Text>Add newExpense screen</Text>
      <TextInput
        placeholder="Expense"
        onChangeText={(text) => setNewExpense(text)}
        value={newExpense}
      />
      <TextInput
        placeholder="Value"
        keyboardType="numeric"
        onChangeText={(text) => setValue(text)}
        value={value}
      />
      <ActionButton text={"ADD"} onPress={handlePress} color={"green"} />
    </View>
  );
};

export default AddExpenseScreen;
