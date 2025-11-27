import { StyleSheet, Text, View, ScrollView, Platform } from "react-native";
import { Colors } from "@/constants/theme";
import SubmitButton from "../ui/submit-button";
import DefaultInput from "../ui/input";
import DropdownPicker from "../ui/dropdown-picker";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import DatePicker from "../ui/date-picker";
import { addPassenger, PassengerProp } from "@/utils/passenger";
import { useState } from "react";
import { router } from "expo-router";

export default function PassengerForm() {
  const [passenger, setPassenger] = useState<PassengerProp>({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    nationality: "",
    dob: "",
    passNumber: 0,
    issuedDate: "",
    expiryDate: "",
  });

  // console.log(passenger);

  const handleAddPassenger = (text: any, value: any) => {
    setPassenger((prevState) => ({
      ...prevState,
      [text]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await addPassenger(passenger);
      // console.log("response is", response);
      router.back();
    } catch (error) {
      console.log(error, "it didnt work");
    }
  };

  const countries = ["NGN", "USA", "UK", "CANADA"];

  return (
    <ScrollView style={styles.container}>
      {Platform.OS === "ios" ? (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            justifyContent: "center",
            marginBottom: 10,
          }}
        >
          <MaterialCommunityIcons
            name="account-details"
            size={18}
            color={Colors.primary}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              marginBottom: 5,
              fontFamily: "Poppins_600SemiBold",
            }}
          >
            Passenger Details
          </Text>
        </View>
      ) : null}
      <View>
        <DefaultInput
          label="Fullname"
          placeholder="Enter Fullname"
          bgColor
          onChange={(name) => handleAddPassenger("fullName", name)}
        />
        <DefaultInput
          label="Email"
          placeholder="Enter your email"
          bgColor
          onChange={(email) => handleAddPassenger("email", email)}
        />
        <DefaultInput
          label="Password"
          placeholder="Enter your password"
          bgColor
          onChange={(password) => handleAddPassenger("password", password)}
        />
        <DefaultInput
          label="Phone Number"
          placeholder="Enter Phone Number"
          bgColor
          onChange={(phoneNumber) =>
            handleAddPassenger("phoneNumber", phoneNumber)
          }
        />
        <View style={{ zIndex: 2000, elevation: 2000, marginVertical: 20 }}>
          <DropdownPicker
            label="Nationality"
            placeholder="Select Nationality"
            item={countries}
            dropDownValue={passenger.nationality}
            onChangeValue={(value) => handleAddPassenger("nationality", value)}
          />
        </View>
        <DatePicker
          label="Date of Birth"
          placeholder="Enter DOB"
          value={passenger.dob}
          onEnteredValue={(iso) => handleAddPassenger("dob", iso)}
        />
        <DefaultInput
          label="Passport Number"
          placeholder="Enter Passport Number"
          bgColor
          onChange={(passNumber) =>
            handleAddPassenger("passNumber", Number(passNumber))
          }
        />
        <View style={{ paddingVertical: 20 }}>
          <DatePicker
            label="Issued Date"
            placeholder="Enter Date of Issuance"
            value={passenger.issuedDate}
            onEnteredValue={(date) =>
              handleAddPassenger("issuedDate", date.toISOString())
            }
          />
        </View>
        <View style={{ paddingBottom: 20 }}>
          <DatePicker
            label="Expiry Date"
            placeholder="Enter Expiry Date"
            value={passenger.expiryDate}
            onEnteredValue={(date) =>
              handleAddPassenger("expiryDate", date.toISOString())
            }
          />
        </View>
      </View>
      <View style={{ marginBottom: 40 }}>
        <SubmitButton subject="Submit" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 22,
    paddingVertical: 20,
    gap: 23,
  },
});
