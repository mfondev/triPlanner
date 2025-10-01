import { StyleSheet, TextInput, View } from 'react-native'
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { Colors } from '@/constants/theme';

export default function SeachInput() {
  return (
       <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 0,
          borderRadius: 5,
          backgroundColor: "#fff",
          paddingHorizontal: 10,
        }}
      >
        <EvilIcons name="search" size={24} color={Colors.secondary} />
        <TextInput
          placeholder="Search"
          placeholderTextColor={Colors.secondary}
          style={{
            width: "100%",
            paddingVertical: 15,
            marginLeft: 5,
          }}
        />
      </View>
  )
}

const styles = StyleSheet.create({})