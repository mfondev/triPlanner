import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Colors } from "@/constants/theme";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function sheet() {
  const [value, setValue] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Scan</Text>
        <View
          style={[styles.input, { flexDirection: "row", alignItems: "center" }]}
        >
          <TextInput
            style={[{ flex: 1, paddingVertical: 0 }]}
            value={value}
            onChangeText={setValue}
            placeholder="Scan your card"
            placeholderTextColor={Colors.grey}
          />
          <MaterialCommunityIcons
            name="line-scan"
            size={20}
            color={Colors.secondary}
            style={[{ marginLeft: 8 }]}
          />
        </View>
      </View>

      <Text
        style={{
          fontSize: 16,
          fontFamily: "Poppins_600SemiBold",
          color: Colors.secondary,
        }}
      >
        Or add card by filling the form below
      </Text>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Card number</Text>
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={setValue}
            placeholder="XXXX XXXX XXXX XXXX"
            placeholderTextColor={Colors.grey}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Expiration Date</Text>
            <TextInput
              style={[styles.input, { width: 160 }]}
              value={value}
              onChangeText={setValue}
              placeholder="MM/YY"
              placeholderTextColor={Colors.grey}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>CVV</Text>
            <View
              style={[
                styles.input,
                { flexDirection: "row", alignItems: "center" ,width: 150},
              ]}
            >
              <TextInput
                style={[{ flex: 1, paddingVertical: 0 }]}
                value={value}
                onChangeText={setValue}
                placeholder="XXX"
                placeholderTextColor={Colors.grey}
              />
              <MaterialCommunityIcons
                name="information-slab-circle-outline"
                size={20}
                color={Colors.secondary}
              />
            </View>
          </View>
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={setValue}
            placeholder="XXXX XXXX XXXX XXXX"
            placeholderTextColor={Colors.grey}
          />
        </View>
      </View>
      <TouchableOpacity>
        <Text
          style={{
            backgroundColor: Colors.primary,
            textAlign: "center",
            fontFamily: "Poppins_400Regular",
            color: "white",
            paddingVertical: 10,
            borderRadius: 7,
          }}
        >
          Add card
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  inputWrapper: {
    position: "relative",
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#EAEAEA",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
  },
  label: {
    position: "absolute",
    fontFamily: "Poppins_400Regular",
    top: -10,
    left: 12,
    paddingHorizontal: 6,
    backgroundColor: Colors.gray,
    fontSize: 14,
    color: Colors.secondary,
    zIndex: 10,
  },
});
