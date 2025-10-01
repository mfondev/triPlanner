import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Stack } from "expo-router";
import { Colors } from "@/constants/theme";
import DrawerIcon from "@/components/ui/drawerIcon";
import AvatarIcon from "@/assets/images/avatar.svg";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function _layout() {
  return (
    <Stack
      screenOptions={{
        headerLeft: () => <DrawerIcon />,
        headerRight: () => (
          <TouchableOpacity style={{ marginRight: 20 }}>
            <AvatarIcon width={40} height={35} />
          </TouchableOpacity>
        ),
         headerBlurEffect: 'none',
        headerTitle: "",
        headerShadowVisible: false,
        headerStyle: { backgroundColor: Colors.gray },
      }}
    >
      <Stack.Screen name="index"  />
      <Stack.Screen 
        name="search-history"
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 0, flexDirection: 'row', alignItems: 'center' }}
            >
              <Ionicons name="chevron-back" size={20} color={Colors.accent} />
              <Text>search-history</Text>
            </TouchableOpacity>
          ),
          headerRight: () => null,
        })}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({});
