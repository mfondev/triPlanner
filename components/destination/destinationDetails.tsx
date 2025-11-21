import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/theme";
import SubmitButton from "../ui/submit-button";
import { router } from "expo-router";


export default function DestinationDetails() {
  let charges = 27;
  return (
    <View style={{ padding: 20, gap: 15 }}>
      <Text
        style={{
          fontFamily: "Poppins_600SemiBold",
          fontSize: 15,
          color: Colors.secondary,
        }}
      >
        Booking Details
      </Text>
      <View style={styles.detailsContainer}>
        <Pressable style={styles.detailsHeader}>
          <Text style={styles.detailsText}>Passengers</Text>
        </Pressable>
        <Pressable style={styles.detailsHeader}>
          <Text style={styles.detailsText}>Travel days</Text>
        </Pressable>
        <Pressable style={styles.detailsHeader}>
          <Text style={styles.detailsText}>Choose baggage</Text>
        </Pressable>
        <Pressable style={styles.detailsHeader}>
          <Text style={styles.detailsText}>Transport charges</Text>
          <Text>{charges} $</Text>
        </Pressable>

        <Pressable style={styles.totalContainer}>
          <Text style={styles.detailsText}>Total</Text>
          <Text>{charges + 200} $</Text>
        </Pressable>
      </View>
      <Pressable style={styles.paymentContainer} onPress={()=>{
        router.navigate('/search/search-history/search-result/[destination]/sheet')
      }}>
        <Text style={styles.detailsText}>Payment method</Text>
      </Pressable>
      <SubmitButton subject="Pay" />
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    backgroundColor: "white",
    borderRadius: 8,
  },
  detailsText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 15,
    color: Colors.secondary,
    paddingVertical: 15,
  },
  detailsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: Colors.grey,
    borderBottomWidth: 0.5,
    paddingHorizontal: 10,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: Colors.totalGray,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  totalText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 15,
    color: Colors.secondary,
    paddingVertical: 10,
  },
  paymentContainer: {
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: 'white'
  },
});
