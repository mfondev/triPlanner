import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Button
} from "react-native";
import { Colors } from "@/constants/theme";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { CardProp } from "@/utils/cards";
import { addCard } from "@/utils/cards";
import { router } from "expo-router";
import useCamera from "@/utils/camera";

export default function sheet() {
  const { facing, permission, toggleCameraFacing,requestPermission } = useCamera();
    if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text >We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const [cardDetails, setCardDetails] = useState<CardProp>({
    card_number: "",
    cvv: "",
    exp_date: "",
    name: "",
    card_type: "",
  });

  const onInputChange = (text: any, value: any) => {
    setCardDetails((prevState) => ({
      ...prevState,
      [value]: text,
    }));
  };

  useEffect(() => {
    const num = cardDetails.card_number.toString();

    let detectedType = "";

    if (num.startsWith("4")) {
      detectedType = "Visa";
    } else if (/^5[1-5]/.test(num) || /^2/.test(num)) {
      detectedType = "Mastercard";
    } else {
      detectedType = "";
    }

    setCardDetails((prev) => ({
      ...prev,
      card_type: detectedType,
    }));
  }, [cardDetails.card_number]);

  const handleCardSubmit = async () => {
    const { card_number, cvv, name, exp_date } = cardDetails;

    if (!card_number || !cvv || !name || !exp_date) {
      alert("Please fill in all fields.");
      return;
    }

    const num = card_number.toString();

    if (!(num.startsWith("4") || num.startsWith("5") || num.startsWith("2"))) {
      alert(
        "Card number is invalid. Must start with 4 (Visa), 5 or 2 (Mastercard)."
      );
      return;
    }

    const response = await addCard(cardDetails);
    console.log(response);

    router.back();
  };

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\s+/g, "");

    return cleaned.replace(/(.{4})/g, "$1 ").trim();
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Scan</Text>
        <View
          style={[styles.input, { flexDirection: "row", alignItems: "center" }]}
        >
          <TextInput
            style={[{ flex: 1, paddingVertical: 0 }]}
            value={""}
            // onChangeText={setValue}
            placeholder="Scan your card"
            placeholderTextColor={Colors.grey}
            readOnly
          />
          <Pressable>
            <MaterialCommunityIcons
              name="line-scan"
              size={20}
              color={Colors.secondary}
              style={[{ marginLeft: 8 }]}
            />
          </Pressable>
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
            value={cardDetails.card_number}
            onChangeText={(text) => {
              const formatted = formatCardNumber(text);
              onInputChange(formatted, "card_number");
            }}
            placeholder="XXXX XXXX XXXX XXXX"
            placeholderTextColor={Colors.grey}
            maxLength={19}
            inputMode="numeric"
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Expiration Date</Text>
            <TextInput
              style={[styles.input, { width: 160 }]}
              onChangeText={(exp) => onInputChange(exp, "exp_date")}
              placeholder="MM/YY"
              placeholderTextColor={Colors.grey}
              maxLength={5}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>CVV</Text>
            <View
              style={[
                styles.input,
                { flexDirection: "row", alignItems: "center", width: 150 },
              ]}
            >
              <TextInput
                style={[{ flex: 1, paddingVertical: 0 }]}
                // value={value}
                onChangeText={(cvv) => onInputChange(cvv, "cvv")}
                placeholder="XXX"
                placeholderTextColor={Colors.grey}
                maxLength={3}
                inputMode="numeric"
                secureTextEntry
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
            // value={value}
            onChangeText={(name) => onInputChange(name, "name")}
            placeholder="XXXX XXXX XXXX XXXX"
            placeholderTextColor={Colors.grey}
          />
        </View>
      </View>
      <TouchableOpacity onPress={handleCardSubmit}>
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
