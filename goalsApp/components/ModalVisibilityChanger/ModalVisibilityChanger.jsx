import { View, Pressable, Text, Image } from "react-native"
import modalButtonStyle from "./ModalVisibilityChangerStyle"

const ModalVisibilityChanger = ({visibilityHandler}) => {
    return(
    <View>
        <Image source={require('../../assets/images/fictionalLogoColored.png')} style={modalButtonStyle.logo}/>
        <Pressable onPress={visibilityHandler} android_ripple={"#cccccc"}>
            <Text style={modalButtonStyle.button}>Add goal</Text>
        </Pressable>
    </View> 
    )
}

export default ModalVisibilityChanger;