import { Stack } from "expo-router";
import { Colors } from "@/constants/theme";

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="modal"
        options={{
          headerShown: false,
          presentation: "modal",
          contentStyle: {
            backgroundColor: Colors.gray,
            padding: 20
          },
        }}
      />
    </Stack>
  );
}
