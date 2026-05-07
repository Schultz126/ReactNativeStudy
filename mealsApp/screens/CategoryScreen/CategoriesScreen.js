import { View, FlatList } from "react-native";
import { CATEGORIES } from "../../data/dummie_data";
import ElementoDaCategoria from "../../components/ElementoDaCategoria/ElementoDaCategoria";
import style from "./CategoryScreenStyle";

const CategoriesScreen = ({ navigation }) => {
  // Essa função não é realmente necessária. Está aqui apenas para manter o código da tela mais limpo
  const renderCategoryItem = (data) => {
    function pressHandler() {
      navigation.navigate("Meal Overview");
    }
    return (
      <ElementoDaCategoria
        title={data.item.title}
        color={data.item.color}
        onPress={pressHandler}
      />
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => {
        return item.id;
      }}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
