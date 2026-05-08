import { CATEGORIES, MEALS } from "../../data/dummie_data";
import { View, Text, FlatList } from "react-native";
import styles from "./MealsOverviewStyle";
import MealItem from "../../components/MealItem/MealItem";
import { useEffect } from "react";

const MealsOverview = ({ route, navigation }) => {
  const cId = route.params.cID;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(cId) >= 0;
  });

  useEffect(() => {
    const categoryTitle = CATEGORIES.find(
      // .find é um método padrão do JS.
      (category) => category.id === cId,
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [cId, navigation]);

  function renderMealItem(itemData) {
    return (
      <MealItem
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        complexity={itemData.item.complexity}
        duration={itemData.item.duration}
        affordability={itemData.item.affordability}
      />
    );
  }

  return (
    <View style={styles.outerContainer}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={renderMealItem}
        removeClippedSubviews={false}
      />
    </View>
  );
};

export default MealsOverview;
