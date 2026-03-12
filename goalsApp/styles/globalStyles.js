import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    paddingBottom: 50,
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
  },

  goalsContainer: {
    flex: 5,
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#cccccc',
    borderStyle: 'solid'
  },

  testingBorder: {
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid'
  },
});

export default styles;