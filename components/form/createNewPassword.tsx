import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function createNewPassword() {
  return (
    <View>
      <Text>Create new Password</Text>
      <Text>Your new password must be unique from those previously used</Text>
      <Text>Password</Text>
      <TextInput placeholder="Enter new password" secureTextEntry />
      <Text>Password</Text>
        <TextInput placeholder="Retype password" secureTextEntry />
      <Pressable>Reset Password</Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});
