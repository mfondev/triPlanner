import AddButton from "@/components/ui/add-button";
import { StyleSheet, View } from "react-native";
import { Colors } from "@/constants/theme";

export default function Passengers() {
  return (
    <View style={styles.container}>
      <AddButton path="/passengers/modal" subject="Add new Passenger" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.gray,
    paddingHorizontal: 25,
    flex: 1,
  },
});
