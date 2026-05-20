import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoryScreen/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Esta é apenas uma forma de navegar. Existem outras formas
import { createDrawerNavigator } from "@react-navigation/drawer";
import MealsOverview from "./screens/MealsOverview/MealsOverview";

import MealInfoScreen from "./screens/MealInfoScreen/MealInfoScreen";
import FavoriteScreen from "./screens/FavoritesScreen/FavoriteScreen";
import { Ionicons } from "@expo/vector-icons";
import FavoritesContextProvider from "./store/context/favorites-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <FavoritesContextProvider>
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
            {/* Primeira tela: Esta tela possui os cards de cada categoria */}
            <Stack.Screen
              name="Meals Categories"
              component={DrawerNavigator}
              options={{
                title: "Categorias",
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="Meal Overview"
              component={MealsOverview}
              options={({ route, navigation }) => {
                const cID = route.params?.categoryId;
                return {};
              }}
            />

            <Stack.Screen name="Meal Info" component={MealInfoScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
