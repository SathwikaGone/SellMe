import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import colors from "../config/colors";
export default function ViewImage() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
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
    height: 50,
    width: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 20,
    left: 20,
  },
  deleteIcon: {
    height: 50,
    width: 50,
    backgroundColor: colors.secondary,
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
