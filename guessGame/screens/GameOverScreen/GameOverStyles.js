import { StyleSheet } from "react-native";
import Colors from "../../util/Colors/Colors";

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: Colors.primaryWhite,
    textAlign: 'center',
    marginBottom: 24,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  summaryContainer: {
    backgroundColor: Colors.darkerSecondary,
    padding: 24,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: Colors.secondary,
    marginBottom: 36,
    elevation: 4, // Android shadow
    shadowColor: 'black', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  summaryText: {
    fontSize: 24,
    textAlign: 'center',
    color: Colors.primaryWhite,
    lineHeight: 32,
  },
  highlight: {
    fontWeight: 'bold',
    color: Colors.primary, // Using your Gold/Yellow color here
    fontSize: 28,
  },
});

export default styles