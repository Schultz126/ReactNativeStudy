import { Button, Text, View } from "react-native";
import listStyle from "./ListElementStyles";

const ListElement = ({value, message}) => {
    return (
        <View style={listStyle.elementContainer}>
            <Text>{value}</Text>
            <Button 
            title='Delete'
            onPress={() => message(`Deseja deletar '${value}'?`)}/>
        </View>
    )
}
export default ListElement;