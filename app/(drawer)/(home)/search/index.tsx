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
import DropdownPicker from "@/components/ui/dropdown-picker";
import DatePicker from "@/components/ui/date-picker";
import { COUNTRIES, flightClass } from "@/utils/data";
import { router } from "expo-router";
import { destinations,arrivals } from "@/utils/countries";
import { useEffect } from "react";


export default function Search() {
  const [from, setFrom] = useState<string[]>([]);
  const [to, setTo] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedFrom, setSelectedFrom] = useState<string | null>(null);
  const [selectedTo, setSelectedTo] = useState<string | null>(null);
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [departureDate, setDepartureDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);

  useEffect(() => {
    const fetchArrivals = async () => {
      try {
        setLoading(true);
        const data = await arrivals();
        setTo(data?.map((d) => d.arrival_location) ?? []);
      } catch (err) {
        setError("Failed to fetch arrivals");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
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
    fetchArrivals();
  }, []);

  const flightClasses = flightClass.map((classes) => classes.flightClass);

  const handleNavigate = () => {
    if (!selectedFrom || !selectedTo) {
      alert("Please select both 'From' and 'To' locations.");
      return;
    }
    if (!selectedClass) {
      alert("Please select a flight class.");
      return;
    }
    router.push({
      pathname: "/search/search-history",
      params: { from: selectedFrom, to: selectedTo, class: selectedClass, },
    });
  };
  // console.log(selectedFrom);

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
            dropDownValue={selectedFrom}
            onChangeValue={setSelectedFrom}
            availability
          />
        </View>
        <View style={{ zIndex: 2000, elevation: 2000 }}>
          <DropdownPicker
            label="To"
            placeholder="Enter destination"
            item={to}
            availability
            dropDownValue={selectedTo}
            onChangeValue={setSelectedTo}
          />
        </View>
        {/* <DatePicker label={"Departure"} placeholder="Select departure date" value={departureDate} onEnteredValue={setDepartureDate} /> */}
        {/* <DatePicker label={"Return"} placeholder="Select return date" value={returnDate} onEnteredValue={setReturnDate} /> */}
        <View style={{ zIndex: 3000, elevation: 3000 }}>
          <DropdownPicker
            label="Class"
            placeholder="Select Class"
            item={flightClasses}
            dropDownValue={selectedClass}
            onChangeValue={setSelectedClass}
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
