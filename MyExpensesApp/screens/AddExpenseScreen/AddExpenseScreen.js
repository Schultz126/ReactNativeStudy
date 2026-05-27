import { View, Text, TextInput } from "react-native";
import { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import ActionButton from "../../components/ActionButton/ActionButton";
import { ExpensesContext } from "../../store/Context/ExpensesCTX";
import Message from "../../components/Message/Message";

const AddExpenseScreen = () => {
  const [newExpense, setNewExpense] = useState(""); // Nome da despesa a ser adiciona
  const [value, setValue] = useState(""); // Valor monetário da despesa
  const navigate = useNavigation(); // Hook usado para avegação fora de componentes de tela
  const { addExpense } = useContext(ExpensesContext); // Pegando apenas addExpense do context criado

  function handlePress() {
    if (!newExpense || !value) {
      // Verifica se ao menos um dos dois não existe
      console.log("Expense and value are mandatory");
    } else {
      addExpense({ expense: newExpense, amount: parseFloat(value) });
      console.log(`expense ${newExpense} with value ${value} added`);
      navigate.goBack(); // Navega para a tela anterior
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
        onChangeText={(text) => setValue(parseFloat(text))} // parseFloat usado para que "value" não tenha valor de string
        value={value}
      />
      <ActionButton text={"ADD"} onPress={handlePress} color={"green"} />
    </View>
  );
};

export default AddExpenseScreen;
