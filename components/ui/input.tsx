import { StyleSheet, TextInput, Text, View } from "react-native";
import { Colors } from "@/constants/theme";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import type { ComponentProps } from "react";
import {Picker} from '@react-native-picker/picker';

type IconName = ComponentProps<typeof MaterialCommunityIcons>["name"];

type InputProps = {
  label: string;
  placeholder: string;
  icon?: IconName;
  bgColor?: boolean;
};

export default function DefaultInput({
  label,
  placeholder,
  icon,
  bgColor,
}: InputProps) {
  return (
    <View style={styles.inputWrapper}>
      <Text
        style={{
          position: "absolute",
          fontFamily: "Poppins_400Regular",
          top: -10,
          left: 12,
          paddingHorizontal: 6,
          backgroundColor: bgColor ? Colors.gray : "white",
          fontSize: 14,
          color: Colors.secondary,
          zIndex: 10,
        }}
      >
        {label}
      </Text>
      <View
        style={[styles.input, { flexDirection: "row", alignItems: "center" }]}
      >
        <TextInput
          style={[{ flex: 1, paddingVertical: 0 }]}
          // value={value}
          // onChangeText={setValue}
          placeholder={placeholder}
          placeholderTextColor={Colors.grey}
        />
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={Colors.secondary}
          style={[{ marginLeft: 8 }]}
        />
      </View>
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
});
