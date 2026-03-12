import { View, Modal, Image } from "react-native"
import GoalInput from "../GoalInput/GoalInput";
import AddGoalButton from "../AddGoalButton/AddGoalButton";
import HeaderStyles from "./InputHeaderStyles";

const InputHeader = ({textInputHandler, goal, addGoalHandler, modalIsVisible, visibilityHandler}) => {
    return(
      <Modal visible={modalIsVisible} animationType="slide">
        <View style={HeaderStyles.inputContainer}>
          <Image source={require('../../assets/images/fictionalLogoColored.png')} style={HeaderStyles.logo}/>
            <GoalInput textInputHandler={textInputHandler} goal={goal}/>
            <AddGoalButton text={goal} handleButtonEvent={addGoalHandler} visibilityHandler={visibilityHandler}/>
        </View>
      </Modal>  
    )
}

export default InputHeader;