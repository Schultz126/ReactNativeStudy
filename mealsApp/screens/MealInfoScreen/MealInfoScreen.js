import { ScrollView, View, Text, Image } from "react-native";
import { useLayoutEffect } from "react";
import { MEALS } from "../../data/dummie_data";
import Subtitle from "../../components/Subtitle/Subtitle";
import List from "../../components/List/List";
import ListCard from "../../components/ListCard/ListCard";
import ListItem from "../../components/ListItem/ListItem";
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";
import styles from "./MealInfoStyles";

const MealInfoScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const displayedMeal = MEALS.find((meal) => meal.id === id); // Retorna apenas a comida clicada
  useLayoutEffect(() => {
    // Sem o useEffect as opções são trocadas depois que o componente renderizou
    navigation.setOptions({
      // Mudança das opções dentro do componente. Mais fácil do que fazer no App.js
      title: displayedMeal.title,
      headerTitleStyle: {
        fontSize: 18,
      },
      headerRight: () => {
        return <FavoriteButton id={id} />;
      },
    });
  }, [displayedMeal, navigation]);
  return (
    <>
      <View style={styles.outerContainer}>
        <ScrollView>
          <Image
            style={styles.image}
            source={{ uri: displayedMeal.imageUrl }}
          />
          <List
            message={"What you will need:"}
            items={displayedMeal.ingredients}
          />
          <List message={"How to do:"} items={displayedMeal.steps} />
          <View style={styles.otherInformationContainer}>
            <Subtitle title={"Other Information: "} />
            <ListCard>
              <ListItem
                message={`Is gluten free: ${displayedMeal.isGlutenFree ? "YES" : "NO"}`}
              />
              <ListItem
                message={`Is lactose free: ${displayedMeal.isLactoseFree ? "YES" : "NO"}`}
              />
              <ListItem
                message={`Is vegan: ${displayedMeal.isVegan ? "YES" : "NO"}`}
              />
              <ListItem
                message={`Is vegetarian: ${displayedMeal.isVegetarian ? "YES" : "NO"}`}
              />
            </ListCard>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default MealInfoScreen;
