import { StyleSheet, Text, View } from "react-native";
import { Colors } from "@/constants/theme";
import { useState, useEffect } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {
  label: string;
  placeholder: string;
  item: string[];
  availability?: boolean;
};

export default function DropdownPicker({
  label,
  placeholder,
  item,
  availability,
}: Props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(
    item?.map((item) => ({
      label: item,
      value: item,
    }))  ?? []
  );

   useEffect(() => {
    setItems(
      item?.map((item) => ({
        label: item,
        value: item,
      })) ?? []
    );
  }, [item]);

  

console.log(value);

  return (
    <View style={[styles.inputWrapper, { zIndex: 1000 }]}>
      <Text style={styles.label}>{label}</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder={placeholder}
        placeholderStyle={{
          color: Colors.grey,
          fontFamily: "Poppins_400Regular",
          fontSize: 16,
        }}
        style={styles.dropdown}
        listItemLabelStyle={{
          color: Colors.secondary,
          fontFamily: "Poppins_400Regular",
        }}
        dropDownContainerStyle={styles.dropdownContainer}
        zIndex={2000}
        // zIndexInverse={1000}
        ArrowDownIconComponent={({ style }) => (
          <Ionicons name="chevron-down" size={20} color={Colors.grey} />
        )}
      />
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
  dropdown: {
    borderColor: Colors.lightGray,
    borderRadius: 8,
  },
  dropdownContainer: {
    borderColor: Colors.lightGray,
    borderRadius: 8,
  },
});
