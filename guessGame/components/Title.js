import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    useWindowDimensions // Dimensions API can get all kinds of properties from the device the app is running
} from 'react-native';

import Colors from '../util/Colors/Colors';

const Title = ({children}) => {
    const {height, width } = useWindowDimensions()
    return(
        <View style={[styles.border, height > width ? styles.portrait : styles.landscape]}>
            <Text style={styles.textStyle}>{children}</Text>
        </View>
    )
}

export default Title

const deviceProperties = Dimensions.get('window') // The main reason to use the Dimensions API is to build adaptive apps

const styles = StyleSheet.create({
    border: {
        borderWidth: 2,
        borderColor: Colors.primaryWhite,
        borderRadius: 5,
        backgroundColor: Colors.darkerPrimaryTransparent,
        maxWidth: '80%'
    },
    
    portrait: {
        padding: '4.5%'
    },

    landscape: {
        padding: '2%',
    },

    textStyle: {
        color: Colors.primaryWhite,
        fontSize: 22,
        fontFamily: 'open-sans-bold'
    }
})