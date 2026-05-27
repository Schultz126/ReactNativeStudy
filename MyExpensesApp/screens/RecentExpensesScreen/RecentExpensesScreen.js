import { View, Text } from "react-native";
import { useContext } from "react";
import { ExpensesContext } from "../../store/Context/ExpensesCTX";
import ExpensesOutput from "../../components/ExpensesOutput/ExpensesOutput";

const RecentExpensesScreen = () => {
  const { expenses, removeExpense } = useContext(ExpensesContext);
  const recentExpenses = expenses.reverse().slice(0, 7);

  return (
    <ExpensesOutput
      expenses={expenses}
      fallBackText={"No expenses registered"}
      removeFunction={removeExpense}
      key={Date.now()}
    />
  );
};

export default RecentExpensesScreen;
