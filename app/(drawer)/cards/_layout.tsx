import { StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";
import { Colors } from "@/constants/theme";

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="sheet"
        options={{
          title: "sheet",
          headerShown: false,
          presentation: "formSheet",
          gestureDirection: "vertical",
          animation: "slide_from_bottom",
          sheetInitialDetentIndex: 0,
          sheetAllowedDetents: [0.65, 1],
          sheetCornerRadius: 20,
          sheetExpandsWhenScrolledToEdge: true,
          sheetElevation: 24,
          contentStyle: { backgroundColor: Colors.gray },
        }}
      />
      <Stack.Screen
        name="camera"
        options={{
          title: "Camera",
          headerShown: false,
          presentation: "fullScreenModal",
          animation: "slide_from_bottom",
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({});
