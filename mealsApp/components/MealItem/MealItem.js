import { View, Text, Pressable, Image } from "react-native";
import style from "./MealItemStyle";

const MealItem = ({ title, imageUrl }) => {
  return (
    <View style={style.mealContainer}>
      <Pressable>
        <View>
          <Image style={style.image} source={{ uri: imageUrl }} />
          <Text style={style.innerText}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;
