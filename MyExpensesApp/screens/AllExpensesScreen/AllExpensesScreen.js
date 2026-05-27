import { View, Text } from "react-native";
import { useContext } from "react";
import { ExpensesContext } from "../../store/Context/ExpensesCTX";
import ExpensesOutput from "../../components/ExpensesOutput/ExpensesOutput";

const AllExpensesScreen = () => {
  const { expenses, removeExpense } = useContext(ExpensesContext);

  return (
    <ExpensesOutput
      expenses={expenses}
      fallBackText={"No expenses registered"}
      removeFunction={removeExpense}
      key={Date.now()}
    />
  );
};

export default AllExpensesScreen;
