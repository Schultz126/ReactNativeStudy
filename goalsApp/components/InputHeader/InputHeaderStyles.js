import { StyleSheet } from "react-native";

const mainColor = "#4C4C47";

const HeaderStyles = StyleSheet.create({
    inputContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    gap: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: mainColor
  },
  
  logo: {
    width: 150,
    height: 150,
    margin: 5
  },

})

export default HeaderStyles;