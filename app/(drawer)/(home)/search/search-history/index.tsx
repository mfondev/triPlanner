import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { COUNTRIES } from "@/utils/data";
import { Colors } from "@/constants/theme";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { flights } from "@/utils/countries";

function getRandomOrigin(destId: string) {
  const others = COUNTRIES.filter((c) => c.id !== destId);
  const random = others[Math.floor(Math.random() * others.length)];
  return random.country;
}

type FlightProp = {
  id: string;
  departure_location: string;
  arrival_location: string;
  image: string;
  price: string;
  duration: string;
  times: string;
};

export default function SearchHistory() {
  const { from, to, class: flightClass } = useLocalSearchParams();
  const [allFlights, setAllFlights] = useState<FlightProp[]>([]);
  const [filteredFlights, setFilteredFlights] = useState<FlightProp[]>([]);

  useEffect(() => {
    const fetchFlights = async () => {
      const data = await flights();
      setAllFlights(data ?? []);
    };
    fetchFlights();
  }, []);

  useEffect(() => {
    if (allFlights.length > 0) {
      filterFlights();
    }
  }, [allFlights, from, to, flightClass]);

  const filterFlights = () => {
    const filtered = allFlights.filter((flight) => {
      const matchesDeparture = from ? flight.departure_location === from : true;
      const matchesArrival = to ? flight.arrival_location === to : true;
      return matchesDeparture && matchesArrival;
    });
    setFilteredFlights(filtered);
  };

  console.log(filteredFlights);

  return filteredFlights.length === 0 ? (
    <View style={styles.returnMessage}>
      <Text style={styles.returnMessageText}>
        No flights found matching your search criteria. Please try different
        options.
      </Text>
      <Pressable
        onPress={() => router.back()}
        style={styles.returnMessageButton}
      >
        <Text style={styles.returnMessageButtonText}>Go Back</Text>
      </Pressable>
    </View>
  ) : (
    filteredFlights.map((flight) => (
      <View style={styles.list} key={flight.id}>
        <Pressable
          style={styles.card}
          onPress={() => {
            router.navigate({
              pathname: "/search/search-history/search-result/[destination]",
              params: {
                destination: flight.arrival_location,
                departure: flight.departure_location,
                price: flight.price,
                duration: flight.duration,
                times: flight.times,
                flightClass: flightClass,
                image: flight.image,
              },
            });
          }}
        >
          <Image source={{ uri: flight.image }} style={styles.image} />
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
                {flight.departure_location} – {flight.arrival_location}
              </Text>
            </View>
          </LinearGradient>
        </Pressable>
      </View>
    ))
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
  returnMessage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  returnMessageText: {
    textAlign: "center",
    fontSize: 16,
    color: "#555", // softer gray
    fontWeight: "500",
    fontFamily: "Poppins_400Regular",
  },
  returnMessageButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Colors.primary,
    borderRadius: 5,
  },
  returnMessageButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Poppins_600SemiBold",
  },
});
