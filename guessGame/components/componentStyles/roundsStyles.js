import { StyleSheet } from 'react-native';
import Colors from '../../util/Colors/Colors';

const roundStyles = StyleSheet.create({
    container: {
        borderColor: Colors.darkerPrimary, 
        borderWidth: 2,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        marginHorizontal: 20,
        backgroundColor: Colors.darkGreen, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        alignSelf: 'center',
        // Adding a slight shadow for depth
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    text: {
        color: Colors.primaryWhite,
        fontSize: 18,
        fontFamily: 'sans-serif-medium', 
    },
    roundNumber: {
        color: Colors.primary, 
        fontWeight: 'bold',
        marginLeft: 15,
    },

    number:{
        marginRight: 15
    }
});

export default roundStyles;