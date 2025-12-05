import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  ActivityIndicator,
} from "react-native";
import { Colors } from "@/constants/theme";
import { router } from "expo-router";
import { resetPassword } from "@/utils/auth";
import { useState, useEffect } from "react";

export default function CreateNewPasswordForm() {
  const [firstPassword, setFirstPassword] = useState<string>("");
  const [secondPassword, setSecondPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const passwordMatch = firstPassword === secondPassword;

  useEffect(() => {
    if (error && passwordMatch) {
      setError(false);
    }
  }, [firstPassword, secondPassword, passwordMatch]);

  const onResetPassword = async () => {
    if (!passwordMatch) {
      setError(true);
      return;
    }
    setLoading(true);

    try {
      const newPassword = secondPassword;
      const response = await resetPassword(newPassword);
      console.log(response);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // Alert.alert("Password reset successfully!");
      router.navigate("/(auth)/password-changed");
    } catch (error) {
      console.error(error);
      Alert.alert("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

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
          onChangeText={setFirstPassword}
        />
      </View>
      <View>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Retype password"
          secureTextEntry
          onChangeText={setSecondPassword}
        />
      </View>
      <Pressable
        style={[styles.button, loading && { opacity: 0.6 }]}
        onPress={onResetPassword}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator size="small" />
        ) : (
          <Text style={styles.buttonText}>Reset Password</Text>
        )}
      </Pressable>

      {error && (
        <Text style={styles.errorText}>Make sure passwords are same</Text>
      )}
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
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
    textAlign: "center",
    fontFamily: "Poppins_400Regular",
  },
});
