import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "@/constants/theme";
import { Link } from "expo-router";

export default function index() {
  return (
    <View style={styles.container}>
      <Link
        href="/cards/sheet"
        style={{
          backgroundColor: "#fff",
          borderWidth: 1,
          borderColor: Colors.primary,
          paddingVertical: 12,
          paddingHorizontal: 20,
          borderRadius: 7,
          width: "100%",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: Colors.primary,
            fontSize: 16,
            fontWeight: "500",
            fontFamily: "Poppins_400Regular",
            textAlign: "center",
          }}
        >
          Add new card
        </Text>
      </Link>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 25,
    alignItems: "center",
    backgroundColor: Colors.gray,
  },
});
