import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function forgotPasswordForm() {
  return (
    <View>
      <Text>Forgot Password</Text>
      <Text>Please enter your email to reset your password</Text>
      <TextInput placeholder="Enter your email" />
      <Pressable>Reset Password</Pressable>
    </View>
  )
}

const styles = StyleSheet.create({})