import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoryScreen/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
    <Drawer.Navigator
      screenOptions={{
        // Header Styling
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "#ffffff",
        headerTitleStyle: { fontWeight: "bold" },

        // Drawer Menu Panel Styling
        drawerStyle: {
          backgroundColor: "#3f2f25",
          width: 240,
        },
        drawerActiveBackgroundColor: "#e4baa1",
        drawerActiveTintColor: "#351401",
        drawerInactiveTintColor: "#ffffff",

        // Background color for screens inside the drawer
        sceneContainerStyle: { backgroundColor: "#f5f5f5" },
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",

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
        <StatusBar style="light" />

        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              animation: "fade",
              headerStyle: { backgroundColor: "#350101" },
              headerTintColor: "#ffffff",
              headerTitleStyle: { fontWeight: "bold" },
              headerBackTitleVisible: false,
              contentStyle: {
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            <Stack.Screen
              name="Meals Categories"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="Meal Overview"
              component={MealsOverview}
              options={({ route, navigation }) => {
                const cID = route.params?.categoryId;
                return {
                  title: "Meals",
                };
              }}
            />

            <Stack.Screen
              name="Meal Info"
              component={MealInfoScreen}
              options={{
                title: "About the Meal",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}
