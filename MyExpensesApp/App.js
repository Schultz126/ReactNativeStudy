//React, react-native & expo
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

// Components
import AddExpenseButton from "./components/AddExpenseButton/AddExpenseButton";
import ExpensesProvider from "./store/Context/ExpensesCTX";

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
      screenOptions={{
        headerRight: () => <AddExpenseButton />,
      }}
    >
      <Tabs.Screen name="Recent" component={RecentExpensesScreen} />
      <Tabs.Screen name="AllExpenses" component={AllExpensesScreen} />
    </Tabs.Navigator>
  );
}

export default function App() {
  return (
    <ExpensesProvider>
      <NavigationContainer>
        <Stack.Navigator>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
