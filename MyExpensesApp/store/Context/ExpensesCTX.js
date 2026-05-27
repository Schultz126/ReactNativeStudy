import { createContext, useState } from "react";

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: (expenseData) => {},
  removeExpense: (id) => {},
});

function ExpensesProvider({ children }) {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expenseData) => {
    setExpenses((currentExpenses) => [
      ...currentExpenses,
      { ...expenseData, id: Date.now().toString() }, // Gera um id para ajudar na deleção
    ]);
  };
  const removeExpense = (id) => {
    setExpenses((currentExpenses) =>
      currentExpenses.filter((expense) => expense.id !== id),
    );
  };

  const values = {
    expenses: expenses,
    addExpense: addExpense,
    removeExpense: removeExpense,
  };

  return (
    <ExpensesContext.Provider value={values}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesProvider;
