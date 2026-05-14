import { Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { MEALS } from "../../data/dummie_data";

const FavoriteButton = ({ onPress, isFavorite, id }) => {
  const [pressed, setPressed] = useState(isFavorite);
  function changeIcon() {
    const nextState = !pressed; // Calculate the new value first
    setPressed(nextState);

    const selectedMeal = MEALS.find((meal) => meal.id === id);
    if (selectedMeal) {
      selectedMeal.isFavorite = nextState; // Use the calculated value
    }
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
