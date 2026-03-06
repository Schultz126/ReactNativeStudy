import { Button, TouchableOpacity, Text } from "react-native";
import addButtonStyles from "./AddGoalButtonStyles";

const AddGoalButton = ({text, handleButtonEvent}) => {
    return (
        <TouchableOpacity style={addButtonStyles.button}>
            <Text style={addButtonStyles.textColorWhite} onPress={() => handleButtonEvent(text)}>Add Item</Text>
        </TouchableOpacity>
    )
}

export default AddGoalButton;