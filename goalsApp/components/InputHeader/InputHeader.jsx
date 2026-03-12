import { View, Modal } from "react-native"
import GoalInput from "../GoalInput/GoalInput";
import AddGoalButton from "../AddGoalButton/AddGoalButton";
import HeaderStyles from "./InputHeaderStyles";

const InputHeader = ({textInputHandler, goal, addGoalHandler, modalIsVisible, visibilityHandler}) => {
    return(
      <Modal visible={modalIsVisible} animationType="slide">
        <View style={HeaderStyles.inputContainer}>
            <GoalInput textInputHandler={textInputHandler} goal={goal}/>
            <AddGoalButton text={goal} handleButtonEvent={addGoalHandler} visibilityHandler={visibilityHandler}/>
        </View>
      </Modal>  
    )
}

export default InputHeader;