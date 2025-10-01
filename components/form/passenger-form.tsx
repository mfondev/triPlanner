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

export default function PassengerForm() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <View>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            placeholder="Enter your full name"
            autoComplete="name"
            style={styles.input}
          />
        </View>
        <View>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            placeholder="Enter your email"
            autoComplete="email"
            style={styles.input}
          />
        </View>
        <View style={{ marginBottom: 16 }}>
          <Text style={styles.label}>Password</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 8,
              borderColor: Colors.lightGray,
              borderWidth: 1,
              paddingHorizontal: 10,
            }}
          >
            <TextInput
              placeholder="Enter your password"
              style={{ flex: 1, height: 50 }}
            />
          </View>
        </View>

        <View>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            placeholder="Enter your phone number"
            style={styles.input}
            keyboardType="number-pad"
            textContentType="telephoneNumber"
          />
        </View>
        <View>
          <Text style={styles.label}>Select Nationality</Text>
          <TextInput
            placeholder="Enter your nationality"
            textContentType="countryName"
            style={styles.input}
          />
        </View>
        <View>
          <Text style={styles.label}>Date of Birth</Text>
          <TextInput
            placeholder=""
            textContentType="birthdate"
            style={styles.input}
          />
        </View>
        <View>
          <Text style={styles.label}>Passport Number</Text>
          <TextInput
            placeholder="Enter your passport number"
            style={styles.input}
          />
        </View>
        <View>
          <Text style={styles.label}>Issued Date</Text>
          <TextInput placeholder="issued date" style={styles.input} />
        </View>
        <View >
          <Text style={styles.label}>Expiry Date</Text>
          <TextInput placeholder="enter expiry date" style={[styles.input, {marginBottom: 15}]} />
        </View>
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
  signupText: {
    fontSize: 24,
    fontWeight: 500,
    color: Colors.secondary,
    marginBottom: 4,
    fontFamily: "Poppins_600SemiBold",
  },
  text: {
    fontSize: 14,
    color: Colors.secondary,
    fontFamily: "Poppins_400Regular",
  },
  label: {
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
  },
  input: {
    borderWidth: 1,
    borderColor: "#EAEAEA",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  rememberContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 12,
    borderRadius: 4,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "500",
    fontFamily: "Poppins_400Regular",
  },
  socialButtonContainer: {
    alignSelf: "center",
    flexDirection: "row",
  },
  socialBackground: {
    borderWidth: 1,
    backgroundColor: "#fff",
    borderColor: Colors.lightGray,
  },
  socialButton: {
    padding: 12,
    borderRadius: 4,
    alignItems: "center",
  },
  lineContainer: {
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  line: {
    borderWidth: 0.2,
    color: "#EAEAEA",
    width: 100,
  },
  accountContainer: {
    alignSelf: "center",
    fontSize: 14,
  },
  loginText: {
    color: Colors.primary,
    fontFamily: "Poppins_400Regular",
  },
});
