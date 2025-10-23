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
import { LoginProp, LoginUser } from "@/utils/auth";
import { useState } from "react";

export default function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState<LoginProp>({
    email: "",
    password: "",
  });

  type ChangeCredentialFn = (creds: LoginProp) => void;

  const changeCredential: ChangeCredentialFn = ({
    email,
    password,
  }: LoginProp) => {
    setCredentials((prevState: LoginProp) => ({
      ...prevState,
      email: email,
      password: password,
    }));
  };

  const handleLogin = async () => {
    try {
      if (!credentials.email || !credentials.password) {
        setError("Fields cannot be empty");
        return;
      }
      const token = await LoginUser(credentials);
      if (!token.success) {
        setError(token.error?.message || "Invalid credentials");
        return;
      }
      router.push("/(drawer)/(home)");
    } catch (error) {
      setError("Please check Login credentials");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Login</Text>
      <View>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          placeholder="email@address.com"
          autoCapitalize={"none"}
          style={styles.input}
          value={credentials.email}
          onChangeText={(text) =>
            changeCredential({ email: text, password: credentials.password })
          }
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Enter your password"
          secureTextEntry
          style={styles.input}
          value={credentials.password}
          onChangeText={(text) =>
            changeCredential({ email: credentials.email, password: text })
          }
        />
        <View style={styles.rememberContainer}>
          <Text style={styles.rememberText}>Remember Me</Text>
          <Link href="/forgot-password" style={styles.forgotText}>
            Forgot Password?
          </Link>
        </View>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Sign in</Text>
        </Pressable>
      </View>
      <View style={styles.lineContainer}>
        <View style={styles.line} />
        <Text
          // style={{
          //   fontFamily: "Poppins_400Regular",
          // }}
          style={styles.accountContainer}
        >
          or continue with
        </Text>
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
          or{" "}
          <Link href="/signup" style={styles.createText}>
            create an account
          </Link>
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
    fontFamily: "Poppins_400Regular",
  },
  label: {
    fontSize: 12,
    fontFamily: "Poppins_600SemiBold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#EAEAEA",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    fontFamily: "Poppins_400Regular",
  },
  rememberContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  rememberText: {
    fontSize: 12,
    fontFamily: "Poppins_400Regular",

    color: "#999999",
  },
  forgotText: {
    fontSize: 12,
    color: Colors.primary,
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
    fontFamily: "Poppins_400Regular",
  },
  createText: {
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
