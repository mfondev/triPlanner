import { Drawer } from "expo-router/drawer";

// import { CustomDrawerContent } from "../../components/customDrawerContent";

import { TouchableOpacity, View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const drawerScreens = [
  {
    name: "person",
    title: "Person Management",
    // Icon: PersonIcon,
    headerTitle: "Manage your personal information",
  },
];

export default function Layout() {
  return (
    <Drawer
      //   drawerContent={CustomDrawerContent}
      screenOptions={{
        drawerType: "front",
        drawerHideStatusBarOnOpen: true,
        drawerLabelStyle: {
          textTransform: "capitalize",
          fontSize: 14,
          color: "black",
          fontWeight: "bold",
        },
        drawerActiveBackgroundColor: "#eee7f3",
      }}
    >
      <Drawer.Screen
        name="(home)"
        options={{ drawerItemStyle: { display: "none" }, headerShown: false }}
      />
      {drawerScreens.map((screen) => (
        <Drawer.Screen
          key={screen.name}
          name={screen.name}
          options={({
            navigation,
          }: {
            navigation: import("@react-navigation/native").NavigationProp<any>;
          }) => ({
            title: screen.title,
            drawerLabel: ({ color }: { color: string }) => (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "black", fontSize: 16 }}>
                  {screen.title}
                </Text>
                <Ionicons
                  name="chevron-forward"
                  size={16}
                  color="#5C2684"
                  style={{ marginLeft: 5 }}
                />
              </View>
            ),
            headerTitle: screen.headerTitle,
            // drawerIcon: () => <screen.Icon width={20} height={20} />,
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ marginLeft: 10 }}
              >
                <Ionicons name="arrow-back" size={20} color="#5C2684" />
              </TouchableOpacity>
            ),
          })}
        />
      ))}
    </Drawer>
  );
}
