import { StyleSheet, Text, View } from "react-native";
import { Tabs } from "expo-router";

export default function HomeLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="search" options={{ title: "Search" }} />
      <Tabs.Screen name="favorites" options={{ title: "Favorites" }} />
      <Tabs.Screen name="bookings" options={{ title: "Bookings" }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({});
