import { useContext } from "react";
import { ExpensesContext } from "../../store/Context/ExpensesCTX";
import ExpensesInput from "../../components/ExpensesInput/ExpensesInput";

const AddExpenseScreen = () => {
  const { addExpense } = useContext(ExpensesContext);

  return (
    <ExpensesInput
      flag={1}
      inputFunction={addExpense}
      expense={"ex: Groceries"}
      value={"0.00"}
      key={Date.now}
    />
  );
};

export default AddExpenseScreen;
