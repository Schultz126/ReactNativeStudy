import {
    Text,
    View,
    StyleSheet
} from 'react-native';

import Colors from '../util/Colors/Colors';

const Title = ({children}) => {
    return(
        <View style={styles.border}>
            <Text style={styles.textStyle}>{children}</Text>
        </View>
    )
}

export default Title

const styles = StyleSheet.create({
    border: {
        borderWidth: 4,
        borderColor: Colors.primaryWhite,
        padding: 10,
        borderRadius: 5,
        backgroundColor: Colors.darkerPrimaryTransparent
    },

    textStyle: {
        color: Colors.primaryWhite,
        fontSize: 22,
        fontFamily: 'open-sans-bold'
    }
})