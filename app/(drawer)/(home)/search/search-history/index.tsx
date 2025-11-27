import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Colors } from "@/constants/theme";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { flights } from "@/utils/countries";
import FlightCard from "@/components/destination/flightCard";
import { FlightProp } from "@/components/destination/flightCard";

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

  return filteredFlights.length === 0 ? (
    <View style={styles.returnMessage}>
      <Text style={styles.returnMessageText}>
        No flights found matching your search criteria. Please try different options.
      </Text>
      <Pressable onPress={() => router.back()} style={styles.returnMessageButton}>
        <Text style={styles.returnMessageButtonText}>Go Back</Text>
      </Pressable>
    </View>
  ) : (
    <>
      {filteredFlights.map((flight) => (
        <FlightCard key={flight.id} flight={flight} flightClass={flightClass} />
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  returnMessage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  returnMessageText: {
    textAlign: "center",
    fontSize: 16,
    color: "#555",
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