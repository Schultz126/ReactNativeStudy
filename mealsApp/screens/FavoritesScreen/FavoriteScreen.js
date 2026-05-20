import { View, Text, FlatList } from "react-native";
import { MEALS } from "../../data/dummie_data";
import { useContext } from "react";
import { FavoriteContext } from "../../store/context/favorites-context";
import MealItem from "../../components/MealItem/MealItem";
import { StyleSheet } from "react-native";
import styles from "../MealsOverview/MealsOverviewStyle";

const FavoriteScreen = () => {
  const favoriteMealsCtx = useContext(FavoriteContext);
  const displayedMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id),
  );

  function renderMealItem(itemData) {
    return (
      <MealItem
        id={itemData.item.id}
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        complexity={itemData.item.complexity}
        duration={itemData.item.duration}
        affordability={itemData.item.affordability}
      />
    );
  }

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.fallbackText}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return (
    <>
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
    </>
  );
};

export default FavoriteScreen;
