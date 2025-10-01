import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "@/constants/theme";
import { Link } from "expo-router";
import AddButton from "@/components/ui/add-button";

export default function index() {
  return <AddButton subject="Add Card" path={"/cards/sheet"} />;
}
const styles = StyleSheet.create({
});
