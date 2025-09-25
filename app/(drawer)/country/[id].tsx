import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { COUNTRIES } from "@/utils/data";
import { Colors } from "@/constants/theme";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Traditions from "@/components/traditions";

export default function CountryScreen() {
  const { id, limit } = useLocalSearchParams();
  const navigation = useNavigation();
  const countryDetail = COUNTRIES.filter((country) => country.id === id);
  console.log(countryDetail);

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
              marginTop: -30,
              marginHorizontal: 20,
              backgroundColor: "white",
              borderRadius: 10,
              paddingTop: 16,
              paddingBottom: 16,
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
                  fontSize: 16,
                  fontWeight: "bold",
                  textAlign: "center",
                  fontFamily: 'Poppins_600SemiBold'
                }}
              >
                {country.country}
              </Text>
            </View>
            <FlatList
              data={countryDetail}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <Traditions trads={item.traditions} />}
              scrollEnabled={false} 
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
