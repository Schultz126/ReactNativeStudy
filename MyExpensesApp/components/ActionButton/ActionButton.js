import { Pressable, StyleSheet, Text, Platform } from "react-native";

const ActionButton = ({ onPress, text, color = "#FFF" }) => {
  const isDarkBg = color === "black" || color === "#000" || color === "#000000";

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        {
          backgroundColor: color,
          opacity: pressed ? 0.8 : 1,
        },
      ]}
    >
      <Text style={[styles.text, { color: isDarkBg ? "#FFF" : "#1C1C1E" }]}>
        {text}
      </Text>
    </Pressable>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)", // Softened border
    borderRadius: 10, // Modern, slightly rounder corners
    paddingVertical: 12, // Fixed pixel spacing for predictability
    paddingHorizontal: 24,
    marginVertical: 8,

    // Cross-platform shadows
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
      },
      android: {
        elevation: 4, // Slightly lowered for a cleaner, modern look
      },
    }),
  },
  text: {
    fontSize: 16,
    fontWeight: "600", // Semi-bold for buttons
    letterSpacing: 0.2,
  },
});
