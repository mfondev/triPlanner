import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/theme";
import { Link, useRouter } from "expo-router";
import { forgotPassword } from "@/utils/auth";
import { useState } from "react";
import { getUser } from "@/utils/auth";
import { UserProps } from "@/types/types";
import { useEffect } from "react";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState<string>("");
  // const [userEmail, setUserEmail] = useState<string>("");
  // console.log(email);
  // console.log(userEmail);

  // useEffect(() => {
  //   const getUserEmail = async () => {
  //     const userResponse = await getUser();
  //     setUserEmail(userResponse?.user.email || "");
  //   };
  //   getUserEmail();
  // }, []);

  const router = useRouter();
  async function onSubmit() {
    if (email === "" || !email.includes("@")) {
      Alert.alert("Make sure text is an Email");
      return;
    }
    // if (email === userEmail) {
    //   Alert.alert('Email doesnt exist ')
    // }
    const response = await forgotPassword(email);
    console.log(response);

    router.navigate("/new-password");
  }

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
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          onChangeText={setEmail}
        />
      </View>

      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
      <Text style={styles.accountContainer}>
        Remember your password?{" "}
        <Link
          href={{
            pathname: "/(auth)",
          }}
          style={styles.loginText}
        >
          Login Now
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
    fontFamily: "Poppins_400Regular",
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
