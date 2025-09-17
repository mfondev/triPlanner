import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Colors } from "@/constants/theme";

const DATA = [
  {
    id: "1",
    icon: <SimpleLineIcons name="handbag" size={24} color="white" />,
    header: "Find the best ready trips",
    link: "Book now",
    path: "/bookings",
  },
  {
    id: "2",
    icon: <FontAwesome5 name="route" size={24} color="white" />,
    header: "Start by planning your trip",
    link: "Create own route",
    path: "/travel",
  },
  {
    id: "3",
    icon: <FontAwesome5 name="map" size={24} color="white" />,
    header: "Explore top destinations",
    link: "Explore now",
    path: "/explore",
  },
];

export default function Services() {
  return (
    <View
      style={{
        position: "absolute",
        bottom: -120,
        right: 0,
      }}
    >
      <ScrollView
        style={{ paddingLeft: 24 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12 }}
      >
        {DATA.map((item) => (
          <View
            key={item.id}
            style={{
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: 10,
              paddingVertical: 25,
              width: 140,
            }}
          >
            <View
              style={{
                backgroundColor: Colors.primary,
                borderRadius: "100%",
                padding: 10,
                marginBottom: 6,
              }}
            >
              {item.icon}
            </View>
            <Text
              style={{
                fontSize: 14,
                width: 110,
                textAlign: "center",
                marginVertical: 10,
                lineHeight: 20,
                fontFamily: "Poppins_400Regular",
              }}
            >
              {item.header}
            </Text>
            <Link
              href={item.path as any}
              style={{
                fontSize: 14,
                color: Colors.primary,
                fontFamily: "Poppins_600SemiBold",
              }}
            >
              {item.link}
            </Link>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
