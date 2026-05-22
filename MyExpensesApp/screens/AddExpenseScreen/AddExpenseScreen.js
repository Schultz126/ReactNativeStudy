import { View, Text, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ActionButton from "../../components/ActionButton/ActionButton";

const AddExpenseScreen = () => {
  const navigate = useNavigation();

  function handlePress() {
    navigate.goBack();
  }

  return (
    <View>
      <Text>Add expense screen</Text>
      <TextInput placeholder="Expense" />
      <TextInput placeholder="Value" keyboardType="numeric" />
      <ActionButton text={"ADD"} onPress={handlePress} color={"green"} />
    </View>
  );
};

export default AddExpenseScreen;
