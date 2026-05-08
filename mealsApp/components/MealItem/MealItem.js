import { View, Text, Pressable, Image } from "react-native";
import style from "./MealItemStyle";

const MealItem = ({ title, imageUrl, duration, complexity, affordability }) => {
  return (
    <View style={style.mealContainer}>
      <Pressable
        style={({ pressed }) => (pressed ? style.pressedButton : null)}
      >
        <View>
          <Image style={style.image} source={{ uri: imageUrl }} />
          <Text style={style.innerText}>{title}</Text>
        </View>
        <View style={style.infoContainer}>
          <Text style={style.infoText}>{duration} min</Text>
          <Text style={style.infoText}>{complexity.toUpperCase()}</Text>
          <Text
            style={[
              style.infoText,
              affordability === "luxurious"
                ? style.textLuxurious
                : style.textAffordable,
            ]}
          >
            {affordability.toUpperCase()}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;
