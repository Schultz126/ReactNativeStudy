import { Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { FavoriteContext } from "../../store/context/favorites-context";
import { useContext } from "react";

const FavoriteButton = ({ id }) => {
  const favoriteMealsCtx = useContext(FavoriteContext);
  const mealIsFavorite = favoriteMealsCtx.ids.includes(id);

  function handlePress() {
    if (mealIsFavorite) {
      favoriteMealsCtx.removeFavorite(id);
    } else {
      favoriteMealsCtx.addFavorite(id);
    }
  }

  return (
    <Pressable onPress={handlePress}>
      <Ionicons
        name={!mealIsFavorite ? "star-outline" : "star"}
        size={24}
        color={"#000000"}
      />
    </Pressable>
  );
};

export default FavoriteButton;
