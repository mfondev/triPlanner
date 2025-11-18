import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Colors } from "@/constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function _layout() {
  return (
    <Stack  >
      <Stack.Screen name="index"
      options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                marginLeft: 0,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Ionicons name="chevron-back" size={20} color={Colors.accent} />
              <Text>search-history</Text>
            </TouchableOpacity>
          ),
          headerTitle: "",
          headerRight: () => null,
          headerShadowVisible: false,
        })} />
      <Stack.Screen
        name="search-result/[destination]"
        options={({ navigation }) => ({
          drawerItemStyle: { display: "none" },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 10 }}
            >
              <Ionicons name="chevron-back" size={20} color={Colors.accent} />
            </TouchableOpacity>
          ),
          headerRight: () => null,
          headerShown: false,
        })}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({});
