import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import * as LocalAuthentication from "expo-local-authentication";
import { router } from "expo-router";
import * as Haptics from "expo-haptics";
  import { authState } from "@/utils/authState";


export default function LockScreen() {


const onBiometricPress = async () => {
  authState.isBiometricAuthenticating = true;

  const { success } = await LocalAuthentication.authenticateAsync();

  authState.isBiometricAuthenticating = false;

  if (success) {
    router.replace("/(auth)");
  } else {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
  }
};



  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onBiometricPress}
        style={{
          cursor: "pointer",
        }}
      >
        <MaterialCommunityIcons
          name="face-recognition"
          size={64}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    paddingTop: 140,
    alignItems: "center",
    backgroundColor: "white",
  },
});
