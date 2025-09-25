import { StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="modal"
    
        options={{
          presentation: "modal",
          headerShown: false,
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({});
