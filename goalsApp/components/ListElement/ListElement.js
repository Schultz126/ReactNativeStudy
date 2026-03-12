import { Text, View, Platform, Alert, Pressable } from "react-native";
import listStyle from "./ListElementStyles";

const ListElement = ({ goalObj, setGoalList }) => {
    
function deleteGoalHandler(id) {
    setGoalList((currentGoals) => {
        currentGoals.filter((goal) => goal.id !== id);
    });
}

function showAlertDelete(message, id) {
    if (Platform.OS === 'web') {
        const confirm = window.confirm(`Delete ${message}?`);
        if (confirm) deleteGoalHandler(id);
    } else {
        Alert.alert(
            "Delete Item",
            `Are you sure you want to delete "${message}"?`,
            [
                { 
                    text: 'Cancel', 
                    style: 'cancel' 
                },
                { 
                    text: 'Delete', 
                    style: 'destructive', 
                    onPress: () => deleteGoalHandler(id) 
                }
            ]
        );
    }
}

return (
    <View style={listStyle.elementContainer}>
        <Text style={listStyle.textColorBlue}>{goalObj.value}</Text>
        <Pressable 
        style={listStyle.button}>
            <Text style={listStyle.textColorRed} onPress={() => showAlertDelete(goalObj.value, goalObj.id)}>Delete</Text>
        </Pressable>
    </View>
);
}
export default ListElement;