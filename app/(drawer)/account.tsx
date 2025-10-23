import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Colors } from "@/constants/theme";

export default function Account() {
  const logOut = () => {
    // localStorage.removeItem("isLoggedIn");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account</Text>

      <View style={styles.imageContainer}>
        <Image
          source={require("@/assets/images/spain.jpg")}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Gideon Atauba</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Full Name</Text>
        <Text style={styles.value}>Gideon Atauba</Text>

        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>victoria@example.com</Text>

        <Text style={styles.label}>Phone Number</Text>
        <Text style={styles.value}>+234 812 345 6789</Text>

        <Text style={styles.label}>Country</Text>
        <Text style={styles.value}>Nigeria</Text>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.button} onPress={logOut}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    fontSize: 28,
    fontFamily: "Poppins_600SemiBold",
    color: Colors.primary,
    marginBottom: 20,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#eee",
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontFamily: "Poppins_600SemiBold",
    color: "#333",
  },
  infoContainer: {
    marginBottom: 40,
  },
  label: {
    fontSize: 14,
    color: "#888",
    fontFamily: "Poppins_400Regular",
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    color: "#333",
    marginBottom: 16,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 12,
    borderRadius: 4,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "500",
    fontFamily: "Poppins_400Regular",
  },
});
