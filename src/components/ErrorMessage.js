import React from "react";
import { StyleSheet, Text } from "react-native";

export default function ErrorMessage(props) {
  if (!props.touched || !props.error) return null;
  return <Text style={styles.text}>{props.error}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "red",
  },
});
