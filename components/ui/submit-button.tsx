import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/theme";

type Props = {
  subject: string;
};
export default function SubmitButton({ subject }: Props) {
  return (
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
        {subject}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
