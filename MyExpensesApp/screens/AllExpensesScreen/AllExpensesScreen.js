import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useContext, useState } from "react";
import ExpenseBox from "../../components/ExpenseBox/ExpenseBox";
import DeleteConfirmationModal from "../../components/Message/Message";
import { ExpensesContext } from "../../store/Context/ExpensesCTX";

const AllExpensesScreen = () => {
  const { expenses, removeExpense } = useContext(ExpensesContext);

  // Estados para controlar o Modal de Alerta
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState(null);

  // Função disparada ao clicar na lixeira do ExpenseBox
  const handleOpenDeleteAlert = (item) => {
    setSelectedExpense(item); // Guarda o item clicado (id e descrição)
    setModalVisible(true); // Abre o modal
  };

  // Função disparada ao confirmar a deleção no modal
  const handleConfirmDelete = () => {
    if (selectedExpense) {
      removeExpense(selectedExpense.id); // Remove do Context Global
    }
    setModalVisible(false); // Fecha o modal
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={style.text}>No expenses to show</Text>

      {expenses.map((item) => (
        <ExpenseBox
          key={item.id}
          expense={item.expense}
          value={item.amount}
          onDelete={() => handleOpenDeleteAlert(item)} // Abre o alerta passando o item todo
        />
      ))}

      <DeleteConfirmationModal
        visible={modalVisible}
        itemName={selectedExpense ? selectedExpense.expense : ""}
        onClose={() => setModalVisible(false)}
        onConfirm={handleConfirmDelete}
      />
    </ScrollView>
  );
};

export default AllExpensesScreen;

const style = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
