import { Pressable, Text, View } from "react-native";
import addButtonStyles from "./AddGoalButtonStyles";

const AddGoalButton = ({text, handleButtonEvent, visibilityHandler}) => {
    return (
        <View style={addButtonStyles.buttonContainer}>
            <Pressable style={addButtonStyles.button}>
                <Text style={addButtonStyles.textColorWhite} onPress={() => handleButtonEvent(text)}>Add Item</Text>
            </Pressable>
            <Pressable style={addButtonStyles.button}>
                <Text style={addButtonStyles.textColorWhite} onPress={visibilityHandler}>Cancel</Text>
            </Pressable>
        </View>
    )
}

export default AddGoalButton;