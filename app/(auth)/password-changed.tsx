import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { Colors } from "@/constants/theme";

export default function PasswordChanged() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Password Changed</Text>

      <Text style={styles.subtitle}>
        Your password has been changed successfully
      </Text>

      <Image
        source={require("@/assets/images/tick.png")} 
        style={styles.image}
        resizeMode="contain"
      />

      <TouchableOpacity style={styles.button} onPress={() => router.push('/(auth)')}>
        <Text style={styles.buttonText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff", 
  },
  title: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 22,
    color: Colors.secondary || "#333",
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 24,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 62,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 12,
    borderRadius: 4,
    alignItems: "center",
    width: '100%'
  },
  buttonText: {
    color: "#fff",
    fontWeight: "500",
    fontFamily: "Poppins_400Regular",
  },
});
