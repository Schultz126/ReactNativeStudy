import { useContext } from "react";
import { ExpensesContext } from "../../store/Context/ExpensesCTX";
import ExpensesInput from "../../components/ExpensesInput/ExpensesInput";

const EditExpensesScreen = ({ route }) => {
  const { expense, value, id } = route.params;
  const { editExpense } = useContext(ExpensesContext);

  return (
    <ExpensesInput
      expense={expense}
      value={value}
      inputFunction={editExpense}
      id={id}
      flag={0}
      key={Date.now}
    />
  );
};

export default EditExpensesScreen;
