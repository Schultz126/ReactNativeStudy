import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoryScreen/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Esta é apenas uma forma de navegar. Existem outras formas
import MealsOverview from "./screens/MealsOverview/MealsOverview";
import MealInfoScreen from "./screens/MealInfoScreen/MealInfoScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            animation: "fade",
            contentStyle: {
              backgroundColor: "#fff",
            },
          }}
        >
          <Stack.Screen
            name="Meals Categories"
            component={CategoriesScreen}
            options={{
              title: "Categorias",
            }}
          />

          <Stack.Screen
            name="Meal Overview"
            component={MealsOverview}
            options={({ route, navigation }) => {
              const cID = route.params.categoryId;
              return {};
            }}
          />

          <Stack.Screen name="Meal Info" component={MealInfoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
