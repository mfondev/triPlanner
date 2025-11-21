import AddButton from "@/components/ui/add-button";
import { StyleSheet, View } from "react-native";
import { Colors } from "@/constants/theme";

export default function Passengers() {
  return (
    <View style={styles.container}>
      <AddButton subject="Plan Trip" path={"/routes/modal"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.gray,
    paddingHorizontal: 25,
    flex: 1,
  },
});
