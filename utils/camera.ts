import { useState, useEffect } from "react";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";

export default function useCamera() {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [onCameraView, setOnCameraView] = useState(false);

  function toggleCameraFacing() {
    setFacing(current => (current === "back" ? "front" : "back"));
  }

  function toggleCameraView() {
    setOnCameraView(prev => !prev);
  }

  return {
    facing,
    permission,
    toggleCameraFacing,
    requestPermission,
    onCameraView,
    toggleCameraView,
  };
}

