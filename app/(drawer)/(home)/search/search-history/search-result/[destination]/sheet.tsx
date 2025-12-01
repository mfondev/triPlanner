import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AddButton from "@/components/ui/add-button";
import SubmitButton from "@/components/ui/submit-button";
import CardList from "@/components/cards/cardList";

export default function sheet() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Select a card</Text>
      <CardList />
      <View style={styles.buttonContainers}>
        <AddButton subject="Add Card" path={"/cards/sheet"} />
        <SubmitButton subject="Confirm" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // padding: 20,
    paddingTop: 20,
    flex: 1,
  },
  buttonContainers: {
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
});
