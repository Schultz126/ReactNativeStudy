import { TextInput } from "react-native";
import goalStyles from "./GoalInputStyles";
import { useState } from "react";

const GoalInput = ({textInputHandler, goal}) => {
    return(
        <TextInput 
        style={goalStyles.input} 
        placeholder='Enter an item'
        value={goal}
        onChangeText={(e) => textInputHandler(e)}/>
    )
}

export default GoalInput;