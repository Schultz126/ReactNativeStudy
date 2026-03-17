import { Pressable, Text } from "react-native";
import mainButtonStyles from "./componentStyles/mainButtonStyle";

const MainButton = ({ text, action }) => {
  return (
    <Pressable
      onPress={action}
      style={({ pressed }) => [
        mainButtonStyles.button,
        pressed && mainButtonStyles.buttonPressed,
      ]}
    >
      <Text style={mainButtonStyles.text}>{text}</Text>
    </Pressable>
  );
};

export default MainButton