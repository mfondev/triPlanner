import { StyleSheet, Text, View, Pressable } from "react-native";
import router from "expo-router";
import { getPassengers } from "@/utils/passenger";
import { useState, useEffect } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Colors } from "@/constants/theme";

export default function PassengerList() {
  const [passengers, setPassengers] = useState<any[]>([]);
  useEffect(() => {
    const fetchPassengers = async () => {
      const passengers = await getPassengers();
      console.log(passengers);
      setPassengers(passengers || []);
    };

    fetchPassengers();
  }, []);

  const handleOpenPassenger = () => {};

  return (
    <View style={styles.container} >
      {passengers.length === 0 ? (
        <Text style={styles.returnText}>No Passengers Added Yet</Text>
      ) : (
        passengers.map((passenger) => (
          <Pressable
            key={passenger.id}
            style={styles.passengerContainer}
            // onPress={() => router.push(`passengers/${passenger.id}`)}
          >
            <FontAwesome name="user" size={18} color={Colors.primary} />
            <Text style={styles.passengerName}>{passenger.fullName}</Text>
          </Pressable>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    
  },
  passengerContainer: {
    backgroundColor: "white",
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 25,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    // borderWidth: 1,
    // borderColor: Colors.gray,
  },
  returnText:{
    fontFamily: "Poppins_400Regular",
    paddingHorizontal: 25,
    paddingTop: 10,
  },
  passengerName:{
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
  }
});
