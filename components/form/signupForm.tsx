import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function SignupForm() {
  return (
    <View>
      <Text>Sign up!</Text>
      <Text>Create account by filling the form below</Text>
      <View>
        <View>
          <Text>Full Name</Text>
          <TextInput placeholder="Enter your full name" />
        </View>
        <View>
          <Text>E-mail</Text>
          <TextInput placeholder="Enter your email" />
        </View>
        <View>
          <Text>Password</Text>
          <TextInput placeholder="Enter your password" secureTextEntry />
        </View>
        <View>
            <Text>Phone Number</Text>
            <TextInput placeholder="Enter your phone number" />
        </View>
        <View>
            <Text>Select Nationality</Text>
            <TextInput placeholder="Enter your nationality" />
        </View>
        <Pressable>Create account</Pressable>
      </View>
      <Text>Already have an account? <Text>Log in Now</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({});
