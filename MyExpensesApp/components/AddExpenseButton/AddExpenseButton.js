import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const AddExpenseButton = () => {
  const navigation = useNavigation();
  function handlePress() {
    navigation.navigate("add");
  }

  return (
    <Pressable style={style.button} onPress={handlePress}>
      <Ionicons name="add" color={"#000"} size={24} />
    </Pressable>
  );
};

const style = StyleSheet.create({
  button: {
    paddingRight: 10,
  },
});

export default AddExpenseButton;
