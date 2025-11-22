import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/theme";

type Props = {
  subject: string;
  onPress: () => {};
};
export default function SubmitButton({ subject,onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
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
        {subject}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
