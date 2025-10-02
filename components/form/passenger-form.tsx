import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import { Colors } from "@/constants/theme";
import SubmitButton from "../ui/submit-button";
import DefaultInput from "../ui/input";
import DropdownPicker from "../ui/dropdown-picker";

export default function PassengerForm() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <DefaultInput label="Fullname" placeholder="Enter Fullname" bgColor />
        <DefaultInput label="Email" placeholder="Enter your email" bgColor />
        <DefaultInput
          label="Password"
          placeholder="Enter your password"
          bgColor
        />
        <DefaultInput
          label="Phone Number"
          placeholder="Enter Phone Number"
          bgColor
        />
        <DropdownPicker label="Nationality" placeholder="Select Nationality" />
        <DefaultInput label="Date of Birth" placeholder="Enter DOB" bgColor />
        <DefaultInput
          label="Passport Number"
          placeholder="Enter Passport Number"
          bgColor
        />
        <DefaultInput
          label="Issued Date"
          placeholder="Enter Date of Issuance"
          bgColor
        />
        <DefaultInput
          label="Expiry Date"
          placeholder="Enter Expiry Date"
          bgColor
        />
      </View>
      <SubmitButton subject="Submit" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 22,
    paddingVertical: 40,
    gap: 23,
  },
});
