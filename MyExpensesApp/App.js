import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import RecentExpensesScreen from "./screens/RecentExpensesScreen/RecentExpensesScreen";
import AllExpensesScreen from "./screens/AllExpensesScreen/AllExpensesScreen";
import EditExpensesScreen from "./screens/EditExpenseScreen/EditExpensesScreen";

const MyTabs = createBottomTabNavigator();
const Stack = createStackNavigator();

function BottomTabs() {
  return (
    <MyTabs.Navigator>
      <MyTabs.Screen name="Recent" component={RecentExpensesScreen} />
      <MyTabs.Screen name="AllExpenses" component={AllExpensesScreen} />
    </MyTabs.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="expenses"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="edit" component={EditExpensesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
