import { Stack } from "expo-router";
import { StyleSheet, Text, View } from 'react-native'

export default function _layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" />
    </Stack>
  )
}

const styles = StyleSheet.create({})