import { TextInput } from "react-native";
import goalStyles from "./GoalInputStyles";

const GoalInput = ({textInputHandler, goal}) => {
    return(
        <TextInput 
        style={goalStyles.input} 
        placeholder='Enter an item'
        placeholderTextColor={'#E5DCC5'}
        value={goal}
        onChangeText={(e) => textInputHandler(e)}/>
    )
}

export default GoalInput;