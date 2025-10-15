import { Colors } from "@/constants/theme";
import { Link, router } from "expo-router";
import { COUNTRIES } from "@/utils/data";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import SvgUri from "expo-svg-uri";
import {
  StyleSheet,
  TextInput,
  View,
  FlatList,
  Text,
  Image,
  Pressable,
} from "react-native";

export default function Countries() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 0,
          borderRadius: 5,
          backgroundColor: "#fff",
          paddingHorizontal: 10,
        }}
      >
        <EvilIcons name="search" size={24} color={Colors.secondary} />
        <TextInput
          placeholder="Search"
          placeholderTextColor={Colors.secondary}
          style={{
            width: "100%",
            paddingVertical: 15,
            marginLeft: 5,
          }}
        />
      </View>
      <View style={{ marginTop: 20, width: "100%" }}>
        <FlatList
          data={COUNTRIES}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 1,
                backgroundColor: "#e0e0e0",
                marginHorizontal: 10,
              }}
            />
          )}
          renderItem={({ item }) => (
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 0,
                borderRadius: 5,
                backgroundColor: "#fff",
                paddingHorizontal: 10,
                paddingVertical: 10,
                gap: 10,
                marginTop: 10,
              }}
              onPress={() => {
                router.navigate({
                  pathname: "/country/[id]",
                  params: { id: item.id },
                });
              }}
            >
              <View
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: 50,
                  overflow: "hidden",
                  backgroundColor: "#fff",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* <SvgUri source={{ uri: item.flag }} width={25} height={25} />
                 */}
                 <Image source={{uri: item.flag}} width={25} height={25}/>
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: "Poppins_400Regular",
                }}
              >
                {item.country}
              </Text>
            </Pressable>
          )}
          ListFooterComponent={<View style={{ height: 60 }} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignItems: "center",
    backgroundColor: Colors.gray,
  },
});
