import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoryScreen/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Esta é apenas uma forma de navegar. Existem outras formas
import MealsOverview from "./screens/MealsOverview/MealsOverview";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            animation: "slide_from_right",
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
              animation: "fade",
            }}
          />

          <Stack.Screen
            name="Meal Overview"
            component={MealsOverview}
            options={{
              title: "Pratos",
              animation: "slide_from_right",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
