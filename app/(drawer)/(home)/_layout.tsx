import { StyleSheet, Text, View } from "react-native";
import { Tabs } from "expo-router";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { Colors } from "@/constants/theme";

export default function HomeLayout() {
  return (
    <Tabs
      screenOptions={{
        // headerShown: false,
        headerStyle:{backgroundColor: Colors.gray},
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.accent,
        tabBarStyle: { backgroundColor: Colors.tabBg },
        tabBarLabelStyle: {
            fontFamily: "Poppins_400Regular",
          },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="house" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "search",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <EvilIcons name="search" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: "favorites",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="heart" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="bookings/index"
        options={{
          title: "bookings",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="clipboard-list" size={20} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({});
