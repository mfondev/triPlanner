import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Colors } from "@/constants/theme";
import { useFavoriteStore } from "@/utils/store";
import FlightCard from "@/components/destination/flightCard";

export default function Favorites() {
  const { favorites } = useFavoriteStore();

  return (
    <ScrollView style={styles.container}>
      {favorites.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>No favorite flights yet!</Text>
          <Text style={styles.emptySubtext}>
            Start adding flights to your favorites
          </Text>
        </View>
      ) : (
        favorites.map((flight) => (
          <FlightCard key={flight.id} flight={flight} />
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray,
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Poppins_600SemiBold",
    color: "#333",
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    color: "#666",
  },
});