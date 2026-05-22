import { Pressable, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ActionButton = ({ onPress, text, color }) => {
  const navigate = useNavigation();

  return (
    <Pressable
      onPress={onPress}
      style={[style.container, { backgroundColor: color || "white" }]}
    >
      <Text>{text}</Text>
    </Pressable>
  );
};

export default ActionButton;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
    maxWidth: "15%",
    minHeight: "4%",
    padding: "1%",
    elevation: 7,
    overflow: "hidden",
  },
});
