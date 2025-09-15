import { Stack } from "expo-router";

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function _layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" options={{ headerShown: false }} />
    </Stack>
  )
}

const styles = StyleSheet.create({})