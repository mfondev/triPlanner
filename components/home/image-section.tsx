import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Services from "./services";

export default function ImageSection() {
  return (
    <View style={{
        position: 'relative',
    }}>
      <Image
        style={{ width: "100%", height: 250 }}
        source={require("@/assets/images/nigeria.jpg")}
      />
      <Services />
    </View>
  );
}

const styles = StyleSheet.create({});
