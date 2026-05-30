import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useState } from "react";
import ExpenseBox from "../../components/ExpenseBox/ExpenseBox";
import DeleteConfirmationModal from "../../components/Message/Message";

const ExpensesOutput = ({ expenses, fallBackText, removeFunction }) => {
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
      removeFunction(selectedExpense.id); // Remove do Context Global
    }
    setModalVisible(false); // Fecha o modal
  };

  return (
    <ScrollView>
      {expenses.length === 0 ? (
        <Text style={style.text}>{fallBackText}</Text>
      ) : (
        expenses.map((item) => (
          <ExpenseBox
            key={item.id}
            expense={item.expense}
            value={item.amount}
            onDelete={() => handleOpenDeleteAlert(item)} // Abre o alerta passando o item todo
            id={item.id} // Não consegui extrair key dentro de ExpenseBox
          />
        ))
      )}

      <DeleteConfirmationModal
        visible={modalVisible}
        itemName={selectedExpense ? selectedExpense.expense : ""}
        onClose={() => setModalVisible(false)}
        onConfirm={handleConfirmDelete}
      />
    </ScrollView>
  );
};

export default ExpensesOutput;

const style = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    padding: "2%",
  },
});
