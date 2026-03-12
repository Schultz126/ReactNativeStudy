import { TextInput } from "react-native";
import goalStyles from "./GoalInputStyles";

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