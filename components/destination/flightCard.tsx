import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/theme";
import { router } from "expo-router";
import { useFavoriteStore } from "@/utils/store";

export type FlightProp = {
  id: string;
  departure_location: string;
  arrival_location: string;
  image: string;
  price: string;
  duration: string;
  times: string;
};

interface FlightCardProps {
  flight: FlightProp;
  flightClass?: string | string[];
}

export default function FlightCard({ flight, flightClass }: FlightCardProps) {
  const { favorites, toggleFavorite } = useFavoriteStore();
  const isFavorite = favorites.some((item) => item.id === flight.id);

  const handleNavigate = () => {
    router.navigate({
      pathname: "/search/search-history/search-result/[destination]",
      params: {
        destination: flight.arrival_location,
        departure: flight.departure_location,
        price: flight.price,
        duration: flight.duration,
        times: flight.times,
        flightClass: flightClass || "",
        image: flight.image,
      },
    });
  };

  return (
    <View style={styles.list}>
      <Pressable style={styles.card} onPress={handleNavigate}>
        <Image source={{ uri: flight.image }} style={styles.image} />
        <TouchableOpacity
          style={styles.favoriteBtn}
          onPress={() => toggleFavorite(flight)}
        >
          <Ionicons
            name={isFavorite ? "heart-sharp" : "heart-outline"}
            size={18}
            color={Colors.primary}
          />
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
              {flight.departure_location} – {flight.arrival_location}
            </Text>
          </View>
        </LinearGradient>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 16,
    backgroundColor: Colors.gray,
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