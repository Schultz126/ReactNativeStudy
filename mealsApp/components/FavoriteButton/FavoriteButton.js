import { Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const FavoriteButton = ({ onPress }) => {
  const [pressed, setPressed] = useState(false);
  function changeIcon() {
    setPressed(!pressed);
  }

  function handlePress() {
    changeIcon();
    onPress();
  }

  return (
    <Pressable onPress={handlePress}>
      <Ionicons
        name={!pressed ? "star-outline" : "star"}
        size={24}
        color={"#000000"}
      />
    </Pressable>
  );
};

export default FavoriteButton;
