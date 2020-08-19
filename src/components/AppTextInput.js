import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import color from "../config/colors";

export default function AppTextInput({ icon, width, ...otherProps }) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={icon} size={25} />
      <TextInput
        {...otherProps}
        style={[styles.textinput, (width = { width })]}
      />
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
    color: color.black,
  },
});
