import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

   useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);
  
 if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
