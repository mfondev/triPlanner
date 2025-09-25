import { StyleSheet, Text, View } from "react-native";
import { Colors } from "@/constants/theme";

export default function BoardingPasses() {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 10,
          width: "100%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            gap: 15,
          }}
        >
          <View
            style={{
              backgroundColor: Colors.primary,
              width: 12,
              height: 12,
              borderRadius: 20,
            }}
          />
          <View
            style={{
              gap: 5,
            }}
          >
            <Text
              style={{
                color: Colors.secondary,
                fontFamily: "Poppins_400Regular",
              }}
            >
              24.09.25 11:05
            </Text>
            <Text
              style={{
                color: Colors.accent,
                fontFamily: "Poppins_400Regular",
              }}
            >
              ADB, Izmir(Turkey)
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            gap: 15,
            marginTop: 25,
          }}
        >
          <View
            style={{
              backgroundColor: Colors.primary,
              width: 12,
              height: 12,
              borderRadius: 20,
            }}
          />
          <View>
            <Text
              style={{
                color: Colors.secondary,
                fontFamily: "Poppins_400Regular",
              }}
            >
              24.09.25 13:30
            </Text>
            <Text
              style={{
                color: Colors.accent,
                fontFamily: "Poppins_400Regular",
              }}
            >
              BUD, Budapest(Hungary)
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 8,
          overflow: "hidden",
          width: "100%",
          marginTop: 30
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottomWidth: 1,
            borderBottomColor: Colors.lightGray,
            paddingVertical: 12,
            paddingHorizontal: 16,
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 14,
              color: "#555",
            }}
          >
            Passenger
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 14,
              color: "#000",
            }}
          >
            Atauba Gideon
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottomWidth: 1,
            borderBottomColor: Colors.lightGray,
            paddingVertical: 12,
            paddingHorizontal: 16,
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 14,
              color: "#555",
            }}
          >
            Flight
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 14,
              color: "#000",
            }}
          >
            619
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottomWidth: 1,
            borderBottomColor: Colors.lightGray,
            paddingVertical: 12,
            paddingHorizontal: 16,
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 14,
              color: "#555",
            }}
          >
            Gate
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 14,
              color: "#000",
            }}
          >
            A7
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottomWidth: 1,
            borderBottomColor: Colors.lightGray,
            paddingVertical: 12,
            paddingHorizontal: 16,
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 14,
              color: "#555",
            }}
          >
            Seat No
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 14,
              color: "#000",
            }}
          >
            27A
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 12,
            paddingHorizontal: 16,
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 14,
              color: "#555",
            }}
          >
            On the way
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 14,
              color: "#000",
            }}
          >
            2h 25m
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 25,
    alignItems: "center",
    backgroundColor: Colors.gray,
  },
});
