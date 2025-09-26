import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Colors } from "@/constants/theme";
import { Link } from "expo-router";

export default function Search() {
  const [destination, setDestination] = useState("");
  const [departure, setDeparture] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [tripClass, setTripClass] = useState("");
  const [transport, setTransport] = useState("");

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
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>From</Text>
          <View style={styles.input}>
            <TextInput
              style={styles.textInput}
              value={destination}
              onChangeText={setDestination}
              placeholder="Enter destination"
              placeholderTextColor={Colors.grey}
            />
            <Ionicons name="chevron-down" size={20} color={Colors.grey} />
          </View>
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>To</Text>
          <View style={styles.input}>
            <TextInput
              style={styles.textInput}
              value={destination}
              onChangeText={setDestination}
              placeholder="Enter destination"
              placeholderTextColor={Colors.grey}
            />
            <Ionicons name="chevron-down" size={20} color={Colors.grey} />
          </View>
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Departure</Text>
          <View style={styles.input}>
            <TextInput
              style={styles.textInput}
              value={departure}
              onChangeText={setDeparture}
              placeholder="Select departure date"
              placeholderTextColor={Colors.grey}
            />
            <Ionicons name="calendar-outline" size={20} color={Colors.grey} />
          </View>
        </View>

        {/* Return */}
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Return</Text>
          <View style={styles.input}>
            <TextInput
              style={styles.textInput}
              value={returnDate}
              onChangeText={setReturnDate}
              placeholder="Select return date"
              placeholderTextColor={Colors.grey}
            />
            <Ionicons name="calendar-outline" size={20} color={Colors.grey} />
          </View>
        </View>

        {/* Class */}
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Class</Text>
          <View style={styles.input}>
            <TextInput
              style={styles.textInput}
              value={tripClass}
              onChangeText={setTripClass}
              placeholder="Select class"
              placeholderTextColor={Colors.grey}
            />
            <Ionicons name="chevron-down" size={20} color={Colors.grey} />
          </View>
        </View>

        {/* Transport */}
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Transport</Text>
          <View style={styles.input}>
            <TextInput
              style={styles.textInput}
              value={transport}
              onChangeText={setTransport}
              placeholder="Select transport"
              placeholderTextColor={Colors.grey}
            />
            <Ionicons name="chevron-down" size={20} color={Colors.grey} />
          </View>
        </View>
        <Link style={styles.button} href='/search/search-history'>
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
  inputWrapper: {
    position: "relative",
    marginBottom: 20,
  },
  label: {
    position: "absolute",
    fontFamily: "Poppins_400Regular",
    top: -10,
    left: 12,
    paddingHorizontal: 6,
    backgroundColor: "white",
    fontSize: 14,
    color: Colors.secondary,
    zIndex: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.lightGray,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    color: "black",
  },
  button: {
    backgroundColor: Colors.primary,
    flexDirection: "row",
    gap:10,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 7,
    textAlign: 'center',
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
