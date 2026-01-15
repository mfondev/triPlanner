import { useRouter } from "expo-router";
import { Children, useEffect, useRef } from "react";
import { AppState } from "react-native";
import { createMMKV } from "react-native-mmkv";
import { authState } from "@/utils/authState";

export const storage = createMMKV({
  id: "userInactivity",
});

const LOCK_TIMEOUT = 3000;

export const UserInactivityProvider = ({ children }: any) => {
  const appState = useRef(AppState.currentState);
  const router = useRouter();

  //   const handleAppStateChange = (nextAppState: any) => {
  //     if (
  //       appState.current.match(/active/) &&
  //       nextAppState.match(/inactive|background/)
  //     ) {
  //       setTimeout(() => {
  //         storage.set("isLocked", "true");
  //         router.replace("/lock");
  //       }, LOCK_TIMEOUT);
  //     }
  //     appState.current = nextAppState;
  //   }
  
  useEffect(() => {
    const subscription = AppState.addEventListener(
      "change",
      handleAppStateChange
    );
    return () => {
      subscription.remove();
    };
  }, []);

  const handleAppStateChange = (nextAppState: any) => {
      if (authState.isBiometricAuthenticating) {
    appState.current = nextAppState;
    return; // ignore Face ID transitions
  }
    //privacy screen when inactive
    console.log("appState", appState.current, nextAppState);
    if (nextAppState === "inactive") {
      router.push("/(auth)/white");
    } else {
      if (router.canGoBack()) {
        router.back();
      }
    }

    //time between closing the app and opening
    if (nextAppState === "background") {
      recordStartTime();
    } else if (
      nextAppState === "active" &&
      appState.current.match(/background/)
    ) {
      const elapsed = Date.now() - (storage.getNumber("startTime") || 0);

      if (elapsed >= LOCK_TIMEOUT) {
        router.push("/(auth)/lock");
      }
    }

    appState.current = nextAppState;
  };

  const recordStartTime = () => {
    storage.set("startTime", Date.now());
  };
  return children;
};
