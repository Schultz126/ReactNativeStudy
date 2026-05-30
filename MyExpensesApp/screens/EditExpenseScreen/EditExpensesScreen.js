import { View, Text } from "react-native";

const EditExpensesScreen = ({ route }) => {
  const { expense, value, id } = route.params;
  return (
    <View>
      <Text>{`${expense} & ${value}`}</Text>
    </View>
  );
};

export default EditExpensesScreen;
