import { StyleSheet, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import Entypo from "@expo/vector-icons/Entypo";

export default function DrawerIcon() {
  const navigation = useNavigation();

  return (
    <Pressable style={styles.container} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
      <Entypo name="menu" size={24} color="black" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 24,
  },
});
