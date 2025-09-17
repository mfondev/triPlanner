import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { Colors } from "@/constants/theme";

const DATA = [
  {
    id: "1",
    title: "Nature",
    image: require("@/assets/images/nature.jpg"),
  },
  {
    id: "2",
    title: "Culture",
    image: require("@/assets/images/culture.jpg"),
  },
  {
    id: "3",
    title: "Wildlife",
    image: require("@/assets/images/wildlife.jpg"),
  },
  {
    id: "4",
    title: "Festival",
    image: require("@/assets/images/festival.jpg"),
  },
  {
    id: "5",
    title: "Mountain",
    image: require("@/assets/images/mountain.jpg"),
  },
  {
    id: "6",
    title: "Beach",
    image: require("@/assets/images/beach.jpg"),
  },
];

export default function Category() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 16,
          marginBottom: 2,
          color: Colors.secondary,
          fontFamily: "Poppins_600SemiBold",
        }}
      >
        Categories
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 15,
          paddingTop: 10,
        }}
      >
        {DATA.map((item) => (
          <View key={item.id} style={styles.categoryItem}>
            <Image style={styles.categoryImage} source={item.image} />
            <Text style={styles.categoryText}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  categoryItem: {
    alignItems: "center",
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
  categoryText: {
    marginTop: 10,
    fontWeight: "semibold",
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
  },
});
