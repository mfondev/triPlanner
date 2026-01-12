import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import useCamera from "@/utils/camera";

export default function Camera() {
  const { facing } = useCamera();
  
  return (
    <View style={styles.container}>
      <CameraView facing={facing} style={styles.camera} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
});