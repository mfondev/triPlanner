import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "@/constants/theme";
import { Link } from "expo-router";
import AddButton from "@/components/ui/add-button";

export default function index() {
  return (
    <View style={styles.container}>
      <AddButton subject="Add Card" path={"/cards/sheet"} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.gray,
    paddingHorizontal: 25,
    flex:1
  },
});
