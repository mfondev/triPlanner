import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Services from "./services";
import { useAssets } from "expo-asset";

export default function ImageSection() {
  const [assets,error] = useAssets([require("@/assets/images/nigeria.jpg")])
  // console.log(assets);
  
  if (!assets) {
    return (
      <View style={{ position: 'relative', justifyContent: 'center', alignItems: 'center', height: 250 }}>
        <Text>Loading image...</Text>
      </View>
    );
  }

  return (
    <View style={{
        position: 'relative',
    }}>
      <Image
        style={{ width: "100%", height: 250 }}
        source={{ uri: assets[0].localUri ?? "" }}
      />
      <Services />
    </View>
  );
}

const styles = StyleSheet.create({});
