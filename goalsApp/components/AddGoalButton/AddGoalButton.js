import { Pressable, Text, View } from "react-native";
import addButtonStyles from "./AddGoalButtonStyles";

const AddGoalButton = ({text, handleButtonEvent, visibilityHandler}) => {
    function addButtonHandler() {
        handleButtonEvent(text);
        visibilityHandler();
    }
    return (
        <View style={addButtonStyles.buttonContainer}>
            <Pressable>
                <Text style={addButtonStyles.addButton} onPress={addButtonHandler}>Add Item</Text>
            </Pressable>
            <Pressable>
                <Text style={addButtonStyles.cancelButton} onPress={visibilityHandler}>Cancel</Text>
            </Pressable>
        </View>
    )
}

export default AddGoalButton;