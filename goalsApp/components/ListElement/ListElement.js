import { Button, Text, View, Platform, Alert } from "react-native";
import listStyle from "./ListElementStyles";

const ListElement = ({ goalObj, setGoalList }) => {
    
    function deleteGoalHandler(id) {
        setGoalList((currentGoals) => {
            return currentGoals.filter((goal) => goal.id !== id);
        });
    }

    function showAlert(message, id) {
        if (Platform.OS === 'web') {
            const confirm = window.confirm(`Delete ${message}?`);
            if (confirm) deleteGoalHandler(id);
        } else {
            Alert.alert(
                "Delete Goal",
                `Are you sure you want to delete "${message}"?`,
                [
                    { text: 'Cancel', style: 'cancel' },
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
            {/* goalObj.value is the text, goalObj.id is the ID */}
            <Text>{goalObj.value}</Text>
            <Button 
                title='Delete'
                onPress={() => showAlert(goalObj.value, goalObj.id)}
            />
        </View>
    );
}
export default ListElement;