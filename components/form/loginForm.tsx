import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function LoginForm() {
  return (
    <View style={{}}>
      <Text>Login</Text>
      <View>
        <Text>E-mail</Text>
        <TextInput placeholder="Enter your email" />
        <Text>Password</Text>
        <TextInput placeholder="Enter your password" secureTextEntry />
        <View>
          <Text>Remember Me</Text>
          <Text>Forgot Password</Text>
        </View>
        <Pressable>Sign in</Pressable>
      </View>

      <Text>or continue with</Text>
      <View>
        <View>
          <FontAwesome5 name="facebook" size={24} color="#1f7bf2" />
        </View>

        <View>
          <FontAwesome5 name="google" size={24} color="black" />
        </View>
        <View>
          <FontAwesome5 name="linkedin" size={24} color="#0a78b5" />
        </View>
      </View>
      <Text>
        or <Pressable>create an account</Pressable>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
