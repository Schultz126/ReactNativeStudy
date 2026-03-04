import { Button } from "react-native";

const AddGoalButton = ({text, handleButtonEvent}) => {
    return (
        <Button 
        title='Add goal' 
        onPress={() => handleButtonEvent(text)}
        />
    )
}

export default AddGoalButton;