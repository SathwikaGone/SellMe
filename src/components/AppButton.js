import React from "react";
import { StyleSheet, Button, View } from "react-native";

export default function AppButton({ title, onPress, color, ...otherProps }) {
  return (
    <View style={styles.buttonComponent}>
      <Button title={title} {...otherProps} onPress={onPress} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonComponent: {
    marginTop: 15,
    width: "70%",
    alignSelf: "center",
  },
});
