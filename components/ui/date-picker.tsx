import { StyleSheet, Text, View, Pressable } from "react-native";
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { Colors } from "@/constants/theme";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {
  label: string;
  placeholder: string;
};

type Mode = "date" | "time";

export default function DatePicker({ label, placeholder }: Props) {
  const [date, setDate] = useState<Date | null>(null);
  const [mode, setMode] = useState<Mode>("date");
  const [show, setShow] = useState(false);

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (event.type === "set" && selectedDate) {
      setDate(selectedDate);
    }
    setShow(false);
  };

const showMode = (currentMode: Mode) => {
  if (show && mode === currentMode) {
    setShow(false);
  } else {
    setShow(true);
    setMode(currentMode);
  }
};

  const showDatepicker = () => {
    showMode("date");
  };

  return (
    <View style={[styles.inputWrapper, { zIndex: 1000 }]}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.input}>
        <Pressable style={{ flex: 1 }} onPress={showDatepicker}>
          <Text
            style={[
              styles.text,
              { color: date ? "black" : Colors.grey },
            ]}
          >
            {date ? date.toLocaleDateString() : placeholder}
          </Text>
        </Pressable>
        <Ionicons
          name="calendar-outline"
          size={20}
          color={Colors.grey}
          // onPress={showDatepicker}
        />
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date ?? new Date()}
          mode={mode}
          is24Hour={true}
           display="spinner" 
          onChange={onChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    position: "relative",
    marginBottom: 20,
  },
  label: {
    position: "absolute",
    fontFamily: "Poppins_400Regular",
    top: -10,
    left: 12,
    paddingHorizontal: 6,
    backgroundColor: "white",
    fontSize: 14,
    color: Colors.secondary,
    zIndex: 3000,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.lightGray,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
  },
});
