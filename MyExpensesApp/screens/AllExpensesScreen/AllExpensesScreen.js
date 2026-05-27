import { ScrollView, w, Text } from "react-native";
import { useContext } from "react";
import ExpenseBox from "../../components/ExpenseBox/ExpenseBox";
import { ExpensesContext } from "../../store/Context/ExpensesCTX";

const AllExpensesScreen = () => {
  const { expenses, removeExpense } = useContext(ExpensesContext);
  return (
    <ScrollView>
      {expenses.map((item) => (
        <ExpenseBox
          key={item.id}
          expense={item.expense}
          value={item.amount}
          onDelete={() => removeExpense(item.id)}
        />
      ))}
    </ScrollView>
  );
};

export default AllExpensesScreen;
