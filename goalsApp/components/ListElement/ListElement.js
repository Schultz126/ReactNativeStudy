import { Button, Text, View, Platform, Alert, TouchableOpacity } from "react-native";
import listStyle from "./ListElementStyles";

const ListElement = ({ goalObj, setGoalList }) => {
    
function deleteGoalHandler(id) {
    setGoalList((currentGoals) => {
        return currentGoals.filter((goal) => goal.id !== id);
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
        <TouchableOpacity style={listStyle.button}>
            <Text style={listStyle.textColorRed} onPress={() => showAlertDelete(goalObj.value, goalObj.id)}>Delete</Text>
        </TouchableOpacity>
    </View>
);
}
export default ListElement;