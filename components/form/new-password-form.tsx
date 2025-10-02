import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "@/constants/theme";
import { router } from "expo-router";

export default function CreateNewPasswordForm() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.forgotText}>Create new Password</Text>
        <Text style={styles.text}>
          Your new password must be unique from those previously used
        </Text>
      </View>
      <View>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter new password"
          secureTextEntry
        />
      </View>
      <View>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Retype password"
          secureTextEntry
        />
      </View>
      <Pressable style={styles.button} onPress={() => router.navigate('/(auth)/password-changed')}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 22,
    paddingVertical: 40,
    gap: 23,
  },
  forgotText: {
    fontSize: 24,
    fontWeight: 500,
    color: Colors.secondary,
    marginBottom: 4,
    fontFamily: "Poppins_600SemiBold",
  },
  text: {
    fontSize: 14,
    color: Colors.secondary,
    fontFamily: "Poppins_400Regular",
  },
  label: {
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
  },
  input: {
    borderWidth: 1,
    borderColor: "#EAEAEA",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },

  button: {
    backgroundColor: Colors.primary,
    padding: 12,
    borderRadius: 4,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "500",
    fontFamily: "Poppins_400Regular",
  },
  accountContainer: {
    alignSelf: "center",
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
  },
  loginText: {
    color: Colors.primary,
    fontFamily: "Poppins_400Regular",
  },
});
