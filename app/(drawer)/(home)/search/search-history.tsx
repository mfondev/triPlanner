import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { COUNTRIES } from "@/utils/data";
import { Colors } from "@/constants/theme";

function getRandomOrigin(destId: string) {
  const others = COUNTRIES.filter((c) => c.id !== destId);
  const random = others[Math.floor(Math.random() * others.length)];
  return random.country;
}

export default function SearchHistory() {
  const data = COUNTRIES.slice(0, 5);

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => {
        const origin = getRandomOrigin(item.id);
        return (
          <View style={styles.card}>
            <Image source={{ uri: item.place_image }} style={styles.image} />
            <TouchableOpacity style={styles.favoriteBtn}>
              <Ionicons name="heart-outline" size={18} color={Colors.primary} />
            </TouchableOpacity>
            <LinearGradient
              colors={["transparent", "rgba(0,0,0,0.8)"]}
              style={styles.gradient}
            >
              <View style={styles.footerContent}>
                <Ionicons
                  name="location-outline"
                  size={16}
                  color="white"
                  style={styles.locationIcon}
                />
                <Text style={styles.footerText}>
                  {origin} – {item.country}
                </Text>
              </View>
            </LinearGradient>
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
    borderRadius: 8,
    overflow: "hidden",
    position: "relative",
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 8,
  },
  favoriteBtn: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 6,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
  },
  footerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationIcon: {
    marginRight: 6,
  },
  footerText: {
    color: "white",
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
  },
});
