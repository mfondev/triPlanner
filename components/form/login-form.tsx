import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Colors } from "@/constants/theme";
import { Link, useRouter } from "expo-router";

export default function LoginForm() {
  const router = useRouter();
  const handleLogin = () => {
    router.navigate("/home");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Login</Text>
      <View>
        <Text style={styles.label}>E-mail</Text>
        <TextInput placeholder="Enter your email" style={styles.input} />
        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Enter your password"
          secureTextEntry
          style={styles.input}
        />
        <View style={styles.rememberContainer}>
          <Text style={styles.rememberText}>Remember Me</Text>
          <Link href="/forgot-password" style={styles.forgotText}>Forgot Password?</Link>
        </View>
        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Sign in</Text>
        </Pressable>
      </View>
      <View style={styles.lineContainer}>
        <View style={styles.line} />
        <Text>or continue with</Text>
        <View style={styles.line} />
      </View>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          height: 350,
        }}
      >
        <View style={[styles.socialButtonContainer, { gap: 12 }]}>
          <View style={[styles.socialButton, styles.socialBackground]}>
            <FontAwesome5 name="facebook" size={24} color="#1f7bf2" />
          </View>
          <View style={[styles.socialButton, styles.socialBackground]}>
            <Image
              source={require("../../assets/images/googleLogo.png")}
              style={{ width: 24, height: 24, resizeMode: "contain" }}
            />
          </View>
          <View style={[styles.socialButton, styles.socialBackground]}>
            <FontAwesome5 name="linkedin" size={24} color="#0a78b5" />
          </View>
        </View>
        <Text style={styles.accountContainer}>
          or <Link href="/signup" style={styles.createText}>create an account</Link>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 22,
    paddingVertical: 40,
    gap: 23,
  },
  loginText: {
    fontSize: 24,
    fontWeight: 500,
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
  rememberText: {
    fontSize: 12,
    color: "#999999",
  },
  forgotText: {
    fontSize: 12,
    color: Colors.primary,
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
  createText: {
    color: Colors.primary,
  },
});
