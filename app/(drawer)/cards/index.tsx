import AddButton from "@/components/ui/add-button";
import { StyleSheet, View } from "react-native";
import { Colors } from "@/constants/theme";
import CardList from "@/components/cards/cardList";

export default function Passengers() {
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <CardList />
      </View>
      <View style={styles.buttonContainer}>
      <AddButton subject="Add Card" path={"/cards/sheet"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    backgroundColor: Colors.gray,
  },
  buttonContainer: {
    backgroundColor: Colors.gray,
    paddingHorizontal: 25,
    paddingVertical: 5,
    flex: 1,
  },
});
