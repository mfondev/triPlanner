import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { UserInactivityProvider } from "@/context/userInactivity";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const authToken =
    typeof window !== "undefined" ? localStorage.getItem("isLoggedIn") : null;

  const isLoggedIn = !!authToken;

  return (
    <UserInactivityProvider>
      <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <StatusBar barStyle="dark-content" />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="white" options={{headerShown: false}}/>
          <Stack.Screen name="lock" options={{headerShown: false}}/>
          <Stack.Protected guard={isLoggedIn}>
            <Stack.Screen name="(drawer)" />
          </Stack.Protected>
        </Stack>
      </GestureHandlerRootView>
    </UserInactivityProvider>
  );
}
