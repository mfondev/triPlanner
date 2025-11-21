import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/theme";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import DestinationDetails from "@/components/destination/destinationDetails";

export default function CountryScreen() {
  const { destination, departure, price, image, duration } =
    useLocalSearchParams();
  const navigation = useNavigation();

  return (
    <ScrollView>
      <StatusBar hidden={true} />
      <View>
        <Image
          source={{ uri: image as string }}
          style={{ width: "100%", height: 250 }}
          resizeMode="cover"
        />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: "absolute",
            top: 50,
            left: 20,
            zIndex: 1,
            backgroundColor: "white",
            borderRadius: 50,
            padding: 8,
          }}
        >
          <Ionicons name="chevron-back" size={20} color={Colors.accent} />
        </TouchableOpacity>
        <View
          style={{
            marginTop: -30,
            marginHorizontal: 20,
            backgroundColor: "white",
            borderRadius: 10,
            paddingTop: 16,
            overflow: "hidden",
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              paddingBottom: 16,
              borderBottomWidth: 1,
              borderBottomColor: Colors.lightGray,
            }}
          >
            <EvilIcons name="location" size={20} color={Colors.secondary} />
            <Text
              style={{
                color: "black",
                fontSize: 18,
                textAlign: "center",
                fontFamily: "Poppins_400Regular",
              }}
            >
              {departure} – {destination}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 50,
            }}
          >
            <View style={{ alignItems: "center", gap: 0, paddingVertical: 0 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <AntDesign
                  name="clock-circle"
                  size={18}
                  color={Colors.primary}
                />
                <Text style={{ fontSize: 16, color: Colors.secondary , fontFamily: "Poppins_600SemiBold"}}>
                  Duration
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  color: Colors.accent,
                  textAlign: "center",
                  fontFamily: "Poppins_600SemiBold",
                }}
              >
                {duration}
              </Text>
            </View>
            <View
              style={{
                width: 1,
                height: "100%",
                backgroundColor: Colors.lightGray,
              }}
            />
            <View style={{ alignItems: "center", gap: 0, paddingVertical: 8 }}>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
              >
                <FontAwesome name="money" size={18} color={Colors.primary} />
                <Text style={{ fontSize: 16, color: Colors.secondary ,fontFamily: "Poppins_600SemiBold"}}>
                  Price
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  color: Colors.green,
                  textAlign: "center",
                  fontFamily: "Poppins_600SemiBold",
                }}
              >
                {price} $
              </Text>
            </View>
          </View>
        </View>
      </View>
      <DestinationDetails />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
