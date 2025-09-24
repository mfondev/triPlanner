import { StyleSheet, Text, View } from "react-native";
import Drawer from "expo-router/drawer";
import DrawerIcon from "@/components/ui/drawerIcon";
import AvatarIcon from "@/assets/images/avatar.svg";
import { Colors } from "@/constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import Octicons from "@expo/vector-icons/Octicons";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const drawertitle = [
  {
    title: "Account",
    name: "account",
    icon: <Octicons name="checklist" size={16} color={Colors.primary} />,
  },
  {
    title: "My cards",
    name: "cards",
    icon: <Octicons name="credit-card" size={16} color={Colors.primary} />,
  },
  {
    title: "Boarding Passes",
    name: "boarding-passes",
    icon: <Fontisto name="bus-ticket" size={16} color={Colors.primary} />,
  },
  {
    title: "Countries traditions",
    name: "countries",
    icon: <Octicons name="globe" size={16} color={Colors.primary} />,
  },
  {
    title: "Passengers List",
    name: "passengers",
    icon: <Octicons name="people" size={16} color={Colors.primary} />,
  },
  {
    title: "Own routes",
    name: "routes",
    icon: (
      <MaterialCommunityIcons
        name="map-marker-circle"
        size={16}
        color={Colors.primary}
      />
    ),
  },
  {
    title: "Privacy & Security",
    name: "privacy",
    icon: <Octicons name="lock" size={16} color={Colors.primary} />,
  },
];

export default function _layout() {
  return (
    <Drawer
      screenOptions={{
        headerLeft: () => <DrawerIcon />,
        headerRight: () => (
          <View style={{ marginRight: 20 }}>
            <AvatarIcon width={40} height={35} />
          </View>
        ),
        headerStyle: { backgroundColor: Colors.gray },
        drawerType: "front",
        drawerHideStatusBarOnOpen: true,
        headerShadowVisible: false,
        drawerActiveBackgroundColor: "transparent",
      }}
    >
      <Drawer.Screen
        name="(home)"
        options={{ title: "", drawerItemStyle: { display: "none" } }}
      />
      {drawertitle.map((screen) => (
        <Drawer.Screen
          key={screen.name}
          name={screen.name}
          options={({ navigation }) => ({
            title: screen.title,
            headerTitle: () => (
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
              >
                <View>{screen.icon}</View>
                <Text>{screen.title}</Text>
              </View>
            ),
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ marginLeft: 10 }}
              >
                <Ionicons name="chevron-back" size={20} color={Colors.accent} />
              </TouchableOpacity>
            ),
            headerRight: () => null,
            headerStyle: { backgroundColor: Colors.gray },
            drawerLabel: ({ color }) => (
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: Colors.grey,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingBottom: 5,
                }}
              >
                <Text
                  style={{
                    color: "black",
                    fontSize: 14,
                    fontFamily: "Poppins_400Regular",
                    marginBottom: 10,
                  }}
                >
                  {screen.title}
                </Text>
                <Ionicons
                  name="chevron-forward"
                  size={16}
                  color={Colors.accent}
                  style={{ marginBottom: 10 }}
                />
              </View>
            ),
          })}
        />
      ))}
      <Drawer.Screen
        name="notifications"
        options={{
          title: "Notifications",
          drawerLabelStyle: {
            fontFamily: "Poppins_400Regular",
            fontSize: 14,
            color: "black",
          },
        }}
      />
      <Drawer.Screen
        name="country/index"
        options={({ navigation }) => ({
          title: "Countries traditions",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 10 }}
            >
              <Ionicons name="chevron-back" size={20} color={Colors.accent} />
            </TouchableOpacity>
          ),
          headerRight: () => null,
          drawerLabelStyle: {
            fontFamily: "Poppins_400Regular",
            fontSize: 14,
            color: "black",
          },
        })}
      />
      <Drawer.Screen
        name="country/[id]"
        options={({ navigation }) => ({
          drawerItemStyle: { display: "none" },
          
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 10 }}
            >
              <Ionicons name="chevron-back" size={20} color={Colors.accent} />
            </TouchableOpacity>
          ),
          headerRight: () => null,
          headerShown: false
        })}
      />
    </Drawer>
  );
}

