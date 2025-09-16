// import { Drawer } from "expo-router/drawer";
// import { TouchableOpacity, View, Text } from "react-native";
// import Ionicons from "@expo/vector-icons/Ionicons";

// const drawerScreens = [
//   {
//     name: "person",
//     title: "Person Management",
//     // Icon: PersonIcon,
//     headerTitle: "Manage your personal information",
//   },
// ];

// export default function Layout() {
//   return (
//     <Drawer
//       //   drawerContent={CustomDrawerContent}
//       screenOptions={{
//         drawerType: "front",
//         drawerHideStatusBarOnOpen: true,
//         drawerLabelStyle: {
//           textTransform: "capitalize",
//           fontSize: 14,
//           color: "black",
//           fontWeight: "bold",
//         },
//         drawerActiveBackgroundColor: "#eee7f3",
//       }}
//     >
//       <Drawer.Screen
//         name="(home)"
//         options={{ drawerItemStyle: { display: "none" }, headerShown: false }}
//       />
//       {/* {drawerScreens.map((screen) => (
//         <Drawer.Screen
//           key={screen.name}
//           name={screen.name}
//           options={({
//             navigation,
//           }: {
//             navigation: import("@react-navigation/native").NavigationProp<any>;
//           }) => ({
//             title: screen.title,
//             drawerLabel: ({ color }: { color: string }) => (
//               <View
//                 style={{
//                   flexDirection: "row",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                 }}
//               >
//                 <Text style={{ color: "black", fontSize: 16 }}>
//                   {screen.title}
//                 </Text>
//                 <Ionicons
//                   name="chevron-forward"
//                   size={16}
//                   color="#5C2684"
//                   style={{ marginLeft: 5 }}
//                 />
//               </View>
//             ),
//             headerTitle: screen.headerTitle,
//             // drawerIcon: () => <screen.Icon width={20} height={20} />,
//             headerLeft: () => (
//               <TouchableOpacity
//                 onPress={() => navigation.goBack()}
//                 style={{ marginLeft: 10 }}
//               >
//                 <Ionicons name="arrow-back" size={20} color="#5C2684" />
//               </TouchableOpacity>
//             ),
//           })}
//         />
//       ))} */}
//     </Drawer>
//   );
// }

import { StyleSheet, Text, View } from "react-native";
import Drawer from "expo-router/drawer";
import DrawerIcon from "@/components/ui/drawerIcon";
import AvatarIcon from "@/assets/images/avatar.svg";
import { Colors } from "@/constants/theme";

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
      }}
    >
      <Drawer.Screen
        name="(home)"
        options={{ title: "", drawerItemStyle: { display: "none" } }}
      />
    </Drawer>
  );
}

const styles = StyleSheet.create({});
