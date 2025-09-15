import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/theme";
import { Link } from "expo-router";

export default function ForgotPasswordForm() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.forgotText}>Forgot Password</Text>
        <Text style={styles.text}>
          Don't worry! Please enter the email address linked with your account.
        </Text>
      </View>
      <View>
        <Text style={styles.label}>E-mail</Text>
        <TextInput style={styles.input} placeholder="Enter your email" />
      </View>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
      <Text style={styles.accountContainer}>
        Remember your password? <Link href="(auth)" style={styles.loginText}>Login Now</Link>
      </Text>
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
  },
  text: {
    fontSize: 14,
    color: Colors.secondary,
  },
  label: {
    fontSize: 12,
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
  },
  accountContainer: {
    alignSelf: "center",
    fontSize: 14,
  },
  loginText: {
    color: Colors.primary,
  },
});
