//React, react-native & expo
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

// Components
import AddExpenseButton from "./components/AddExpenseButton/AddExpenseButton";
import ExpensesProvider from "./store/Context/ExpensesCTX";
import Colors from "./utils/Colors/Colors";

//Screens
import RecentExpensesScreen from "./screens/RecentExpensesScreen/RecentExpensesScreen";
import AllExpensesScreen from "./screens/AllExpensesScreen/AllExpensesScreen";
import EditExpensesScreen from "./screens/EditExpenseScreen/EditExpensesScreen";
import AddExpenseScreen from "./screens/AddExpenseScreen/AddExpenseScreen";

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

function BottomTabs() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerRight: () => <AddExpenseButton />,
        tabBarIcon: ({ color, size }) => {
          const iconName =
            route.name === "Recent" ? "time-outline" : "calendar-outline";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.secondary,
        tabBarInactiveTintColor: Colors.primary,
        tabBarActiveBackgroundColor: Colors.activeTab,
        headerStyle: { backgroundColor: Colors.primary },
        sceneStyle: { backgroundColor: Colors.bgWhite },
        headerTintColor: Colors.bgWhite,
      })}
    >
      <Tabs.Screen name="Recent" component={RecentExpensesScreen} />
      <Tabs.Screen name="AllExpenses" component={AllExpensesScreen} />
    </Tabs.Navigator>
  );
}

export default function App() {
  return (
    <ExpensesProvider>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary },
            headerTitleStyle: { color: Colors.bgWhite },
            headerTintColor: Colors.bgWhite,
          }}
        >
          <Stack.Screen
            name="expenses"
            component={BottomTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="edit" component={EditExpensesScreen} />
          <Stack.Screen name="add" component={AddExpenseScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ExpensesProvider>
  );
}
