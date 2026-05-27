import { Modal, View, Text, StyleSheet, Pressable } from "react-native";

const DeleteConfirmationModal = ({ visible, onClose, onConfirm, itemName }) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose} // Trata o botão voltar no Android
    >
      <View style={styles.overlay}>
        <View style={styles.alertBox}>
          <Text style={styles.title}>Delete Expense?</Text>

          <Text style={styles.message}>
            Are you sure you want to delete{" "}
            <Text style={styles.itemName}>"{itemName}"</Text>? This action
            cannot be undone.
          </Text>

          <View style={styles.buttonContainer}>
            {/* Botão Cancelar */}
            <Pressable
              style={[styles.button, styles.cancelButton]}
              onPress={onClose}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </Pressable>

            {/* Botão Confirmar Delecão */}
            <Pressable
              style={[styles.button, styles.deleteButton]}
              onPress={onConfirm}
            >
              <Text style={styles.deleteButtonText}>Delete</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeleteConfirmationModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fundo escurecido semi-transparente
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  alertBox: {
    width: "100%",
    maxWidth: 320,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    elevation: 5, // Sombra Android
    shadowColor: "#000", // Sombra iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1c1c1e",
    marginBottom: 12,
  },
  message: {
    fontSize: 15,
    color: "#666",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 24,
  },
  itemName: {
    fontWeight: "600",
    color: "#1c1c1e",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    gap: 12,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  cancelButton: {
    backgroundColor: "#f2f2f7",
  },
  cancelButtonText: {
    color: "#48484a",
    fontWeight: "600",
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: "#ff3b30", // Vermelho padrão de atenção/erro
  },
  deleteButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
