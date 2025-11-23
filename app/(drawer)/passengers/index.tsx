// Passengers.tsx
import AddButton from "@/components/ui/add-button";
import { StyleSheet, View } from "react-native";
import { Colors } from "@/constants/theme";
import PassengerList from "@/components/passengers/passengerList";

export default function Passengers() {
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <PassengerList />
      </View>
      <View style={styles.buttonContainer}>
        <AddButton path="/passengers/modal" subject="Add new Passenger" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    backgroundColor: Colors.gray,
  },
  buttonContainer: {
    backgroundColor: Colors.gray,
    paddingHorizontal: 25,
    paddingVertical: 10, // Add some vertical padding too
    flex: 1,
  },
});