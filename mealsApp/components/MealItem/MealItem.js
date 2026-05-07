import { View, Text } from "react-native";
import style from "./MealItemStyle";

const MealItem = (meal) => {
  return (
    <View style={style.mealContainer}>
      <View>
        <Text style={style.innerText}>{meal.title}</Text>
      </View>
    </View>
  );
};

export default MealItem;
