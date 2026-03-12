import { View, Button } from "react-native"

const ModalVisibilityChanger = ({visibilityHandler}) => {
    return(
    <View>
        <Button title='Add Goal' onPress={visibilityHandler}></Button>
    </View> 
    )
}

export default ModalVisibilityChanger;