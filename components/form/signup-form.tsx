import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  TouchableOpacity,
} from "react-native";

import { Colors } from "@/constants/theme";
import { useRouter, Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { UserProps } from "@/types/types";
import { createUser } from "@/utils/auth";

export default function SignupForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const [credentials, setCredentials] = useState<UserProps>({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    country: "",
  });

  const changeCredentials = ({
    fullName,
    email,
    password,
    phoneNumber,
    country,
  }: UserProps) => {
    setCredentials((prev) => ({
      ...prev,
      fullName,
      email,
      password,
      phoneNumber,
      country,
    }));
  };
  const handleSubmit = async () => {
    if (
      !credentials.fullName ||
      !credentials.email ||
      !credentials.password ||
      !credentials.phoneNumber ||
      !credentials.country
    ) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      setError("");
      const token = await createUser(credentials);
      console.log("User created successfully:", token);
      Alert.alert(
        "Check your mail",
        "We’ve sent you a confirmation link. Please verify your email before signing in."
      );
      router.push("/(auth)");
    } catch (error) {
      console.error("Error creating user:", error);
      setError("Something went wrong. Please try again.");
    }
  };

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
          <TextInput
            placeholder="Enter your full name"
            autoComplete="name"
            style={styles.input}
            value={credentials.fullName}
            onChangeText={(text) =>
              changeCredentials({ ...credentials, fullName: text })
            }
          />
        </View>
        <View>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            placeholder="Enter your email"
            autoComplete="email"
            style={styles.input}
            value={credentials.email}
            onChangeText={(text) => {
              changeCredentials({ ...credentials, email: text });
            }}
          />
        </View>
        <View style={{ marginBottom: 16 }}>
          <Text style={styles.label}>Password</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 8,
              borderColor: Colors.lightGray,
              borderWidth: 1,
              paddingHorizontal: 10,
            }}
          >
            <TextInput
              placeholder="Enter your password"
              secureTextEntry={!showPassword}
              style={{ flex: 1, height: 50 }}
              value={credentials.password}
              onChangeText={(text) => {
                changeCredentials({ ...credentials, password: text });
              }}
              textContentType="newPassword"
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? "eye-off" : "eye"}
                size={22}
                color="gray"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            placeholder="Enter your phone number"
            style={styles.input}
            keyboardType="number-pad"
            textContentType="telephoneNumber"
            value={credentials.phoneNumber}
            onChangeText={(text) => {
              changeCredentials({ ...credentials, phoneNumber: text });
            }}
          />
        </View>
        <View>
          <Text style={styles.label}>Select Nationality</Text>
          <TextInput
            placeholder="Enter your nationality"
            textContentType="countryName"
            style={styles.input}
            onChangeText={(text) => {
              changeCredentials({ ...credentials, country: text });
            }}
          />
        </View>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Create account</Text>
        </Pressable>
      </View>
      <Text style={styles.accountContainer}>
        Already have an account?{" "}
        <TouchableOpacity>
          <Text style={styles.loginText}>Log in Now</Text>
        </TouchableOpacity>
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
    fontFamily: "Poppins_400Regular",
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
