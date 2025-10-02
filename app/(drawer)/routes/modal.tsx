import { StyleSheet, Text, View } from "react-native";
import { Colors } from "@/constants/theme";
import DefaultInput from "@/components/ui/input";
import SubmitButton from "@/components/ui/submit-button";
import DropdownPicker from "@/components/ui/dropdown-picker";

export default function modal() {
  return (
    <>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          color: Colors.secondary,
          marginBottom: 20,
          fontFamily: "Poppins_600SemiBold",
        }}
      >
        Trip Plan
      </Text>
      <View style={styles.container}>
        <DefaultInput label="Name of trip" placeholder="Name Trip" />
        <DefaultInput label="Number of directions" placeholder="0" />
        <DropdownPicker label="From" placeholder="Enter destination" />
        <DropdownPicker label="Last direction" placeholder="Last direction" />
        <DefaultInput
          label="Departure"
          placeholder="Departure Date"
          icon="calendar-week-outline"
        />
        <DefaultInput
          label="Return"
          placeholder="Return Date"
          icon="calendar-week-outline"
        />
        <SubmitButton subject="Continue" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 8,
  },
});
