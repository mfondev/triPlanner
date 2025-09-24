import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { COUNTRIES } from "@/utils/data";
import { Colors } from "@/constants/theme";
import EvilIcons from "@expo/vector-icons/EvilIcons";

export default function CountryScreen() {
  const { id, limit } = useLocalSearchParams();
  const navigation = useNavigation();
  const countryDetail = COUNTRIES.filter((country) => country.id === id);

  return (
    <ScrollView>
      <StatusBar hidden={true} />
      {countryDetail.map((country) => (
        <View key={country.id}>
          <Image
            source={{ uri: country.place_image }}
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
              position: "absolute",
              bottom: -20,
              left: 0,
              right: 0,
              marginHorizontal: 20,
              padding: 16,
              backgroundColor: "white",
              borderRadius: 6
            }}
          >
            <View style={{
                alignItems:'center',
                justifyContent:'center',
                flexDirection:'row'
            }}>
              <EvilIcons name="location" size={20} color={Colors.secondary} />
              <Text
                style={{
                  color: "black",
                  fontSize: 16,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {country.country}
              </Text>
            </View>
          </View>
        </View>
      ))}
      {/* <View style={{ paddingHorizontal: 16, paddingVertical: 12 }}>
        <Text>User Id: {id}</Text>
        <Text>Limit: {limit}</Text>
      </View> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
