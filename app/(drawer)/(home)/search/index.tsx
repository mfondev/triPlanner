import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Colors } from "@/constants/theme";
import { Link } from "expo-router";
import DropdownPicker from "@/components/ui/dropdown-picker";
import DatePicker from "@/components/ui/date-picker";
import { COUNTRIES,flightClass } from "@/utils/data";

export default function Search() {

  const countries = COUNTRIES.map(country => country.capital)
  const flightClasses = flightClass.map(classes => classes.flightClass)
  
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: Colors.secondary,
          marginBottom: 20,
          fontFamily: "Poppins_600SemiBold",
        }}
      >
        Let's travel
      </Text>
      <View style={styles.formWrapper}>
        <View style={{ zIndex: 3000, elevation: 3000 }}>
          <DropdownPicker label="From" placeholder="Enter destination" item={countries} availability />
        </View>
        <View style={{ zIndex: 2000, elevation: 2000 }}>
          <DropdownPicker label="To" placeholder="Enter destination" item={countries} availability/>
        </View>
        <DatePicker label={"Departure"} placeholder="Select departure date" />
        <DatePicker label={"Return"} placeholder="Select return date" />
        <View style={{ zIndex: 3000, elevation: 3000 }}>
          <DropdownPicker label="Class" placeholder="Select Class"  item={flightClasses} />
        </View>
        
        <Link style={styles.button} href="/search/search-history">
          <Ionicons
            name="search"
            size={18}
            color="white"
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Find Trip</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray,
    padding: 20,
  },
  formWrapper: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 24,
    gap: 15,
  },
  button: {
    backgroundColor: Colors.primary,
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 7,
    textAlign: "center",
  },
  buttonText: {
    fontFamily: "Poppins_400Regular",
    color: "white",
    fontSize: 16,
  },
  buttonIcon: {
    marginRight: 6,
  },
});
