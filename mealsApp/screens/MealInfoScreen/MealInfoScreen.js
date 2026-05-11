import { ScrollView, View, Text } from "react-native";
import { MEALS } from "../../data/dummie_data";
import Title from "../../components/Title/Title";
import List from "../../components/List/List";
const MealInfoScreen = ({ route }) => {
  const { id } = route.params;
  const displayedMeal = MEALS.find((meal) => meal.id === id); // Retorna apenas a comida clicada

  return (
    <>
      <Title title={displayedMeal.title} />
      <ScrollView>
        <List
          message={"What you will need:"}
          items={displayedMeal.ingredients}
        />
        <List message={"How to do:"} items={displayedMeal.steps} />
      </ScrollView>
    </>
  );
};

export default MealInfoScreen;
