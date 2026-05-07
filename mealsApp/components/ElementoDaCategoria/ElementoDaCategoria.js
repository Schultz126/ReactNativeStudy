import { View, Pressable, Text } from "react-native";
import style from "./EDCstyle";

const ElementoDaCategoria = ({ title, color, onPress }) => {
  return (
    <View style={[style.gridItem]}>
      <Pressable
        android_ripple={{ color: "#b7b7b7" }}
        style={({ pressed }) => [
          style.button,
          pressed ? style.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={[style.innerContainer, { backgroundColor: color }]}>
          <Text style={style.innerText}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default ElementoDaCategoria;
