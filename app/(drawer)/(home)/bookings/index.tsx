import SeachInput from "@/components/ui/search-input";
import { Colors } from "@/constants/theme";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Bookings() {
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
      <SeachInput />
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          color: Colors.secondary,
          marginVertical: 20,
          fontFamily: "Poppins_600SemiBold",
        }}
      >
        My Bookings
      </Text>
      <View style={styles.bookingsContainer}>
      <View style={styles.destinationContainer}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.destination}>
            {"Izmir"} to {"Prague"}
          </Text>
          <Text style={styles.date}>{"24.08.25"}</Text>
        </View>
        <Image source={require("@/assets/images/qr-code.png")} style={styles.image} />
      </View>
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
  bookingsContainer:{
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderRadius: 8
  },
  destinationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  descriptionContainer: {
    gap: 5,
  },
  destination: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.secondary,
    fontFamily: "Poppins_600SemiBold",
  },
  date: { fontSize: 14,
    fontWeight: "bold",
    color: Colors.grey,
    fontFamily: "Poppins_400Regular",},
  image: { width: 50, height: 50 },
});
