import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
export default function ViewImage() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="close"
        style={styles.closeIcon}
        color="white"
        size={32}
      />
      <MaterialCommunityIcons
        style={styles.deleteIcon}
        name="trash-can-outline"
        color="white"
        size={32}
      />

      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../../assets/table.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  deleteIcon: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },

  image: {
    width: "100%",
    height: "100%",
  },
});

// <View style={styles.closeIcon}></View>
// <View style={styles.deleteIcon}></View>
