import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AddButton from "@/components/ui/add-button";
import SubmitButton from "@/components/ui/submit-button";

export default function sheet() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Select a card</Text>
      <AddButton subject="Add Card" path={"/cards/sheet"} />
      <SubmitButton subject="Confirm" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  headerText: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
  },
});
