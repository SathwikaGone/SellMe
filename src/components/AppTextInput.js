import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={icon} size={25} />
      <TextInput {...otherProps} style={styles.textinput} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 15,
  },
  textinput: {
    padding: 5,
    fontSize: 18,
    width: "100%",
  },
});
