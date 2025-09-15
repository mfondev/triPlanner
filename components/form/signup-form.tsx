import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/theme";
import { useRouter } from "expo-router";
import { Link } from "expo-router";

export default function SignupForm() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.signupText}>Sign up!</Text>
        <Text style={styles.text}>
          Create account by filling the form below
        </Text>
      </View>
      <View>
        <View>
          <Text style={styles.label}>Full Name</Text>
          <TextInput placeholder="Enter your full name" style={styles.input} />
        </View>
        <View>
          <Text style={styles.label}>E-mail</Text>
          <TextInput placeholder="Enter your email" style={styles.input} />
        </View>
        <View>
          <Text style={styles.label}>Password</Text>
          <TextInput
            placeholder="Enter your password"
            secureTextEntry
            style={styles.input}
          />
        </View>
        <View>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            placeholder="Enter your phone number"
            style={styles.input}
          />
        </View>
        <View>
          <Text style={styles.label}>Select Nationality</Text>
          <TextInput
            placeholder="Enter your nationality"
            style={styles.input}
          />
        </View>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Create account</Text>
        </Pressable>
      </View>
      <Text style={styles.accountContainer}>
        Already have an account?{" "}
        <Link href="/(auth)" style={styles.loginText}>
          Log in Now
        </Link>
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
  signupText: {
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
  rememberContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
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
  socialButtonContainer: {
    alignSelf: "center",
    flexDirection: "row",
  },
  socialBackground: {
    borderWidth: 1,
    backgroundColor: "#fff",
    borderColor: Colors.lightGray,
  },
  socialButton: {
    padding: 12,
    borderRadius: 4,
    alignItems: "center",
  },
  lineContainer: {
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  line: {
    borderWidth: 0.2,
    color: "#EAEAEA",
    width: 100,
  },
  accountContainer: {
    alignSelf: "center",
    fontSize: 14,
  },
  loginText: {
    color: Colors.primary,
  },
});
