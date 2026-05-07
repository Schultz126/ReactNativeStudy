import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoryScreen/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Esta é apenas uma forma de navegar. Existem outras formas
import MealsOverview from "./screens/MealsOverview/MealsOverview";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Meals Categories" component={CategoriesScreen} />
          <Stack.Screen name="Meal Overview" component={MealsOverview} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
