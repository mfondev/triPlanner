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
import { COUNTRIES, flightClass } from "@/utils/data";
import { router } from "expo-router";
import { destinations } from "@/utils/countries";
import { useEffect } from "react";
import { flights } from "@/utils/countries";

export default function Search() {
  const [from, setFrom] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        setLoading(true);
        const data = await destinations();
        setFrom(data?.map((d) => d.departure_location) ?? []);
      } catch (err) {
        setError("Failed to fetch destinations");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  const countries = COUNTRIES.map((country) => country.capital);
  const flightClasses = flightClass.map((classes) => classes.flightClass);

  const handleNavigate = () => {
    router.push({
      pathname: "/search/search-history",
      params: { userId: "abc-123", username: "JohnDoe" },
    });
  };

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
          <DropdownPicker
            label="From"
            placeholder="Enter destination"
            item={from}
            availability
          />
        </View>
        <View style={{ zIndex: 2000, elevation: 2000 }}>
          <DropdownPicker
            label="To"
            placeholder="Enter destination"
            item={from}
            availability
          />
        </View>
        <DatePicker label={"Departure"} placeholder="Select departure date" />
        <DatePicker label={"Return"} placeholder="Select return date" />
        <View style={{ zIndex: 3000, elevation: 3000 }}>
          <DropdownPicker
            label="Class"
            placeholder="Select Class"
            item={flightClasses}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          // href={{ pathname: "/search/search-history" }}
          onPress={handleNavigate}
        >
          <Ionicons
            name="search"
            size={18}
            color="white"
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Find Trip</Text>
        </TouchableOpacity>
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
