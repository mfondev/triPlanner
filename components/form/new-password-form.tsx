import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "@/constants/theme";
import React from "react";

export default function CreateNewPasswordForm() {
  return (
    <View style={styles.container}>
      <Text style={styles.forgotText}>Create new Password</Text>
      <Text style={styles.text}>Your new password must be unique from those previously used</Text>
      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.input} placeholder="Enter new password" secureTextEntry />
      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.input} placeholder="Retype password" secureTextEntry />
      <Pressable style={styles.button}>
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