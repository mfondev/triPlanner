import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/theme";
import Category from "@/components/home/category";
import ImageSection from "@/components/home/image-section";

export default function index() {
  return (
    <View style={styles.container}>
      <View style={{ padding: 24 }}>
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
        <Category />
      </View>
      <ImageSection />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray,
  },
});
