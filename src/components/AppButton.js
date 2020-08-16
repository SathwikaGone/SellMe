import React from "react";
import { StyleSheet, Button, View } from "react-native";

export default function AppButton({ title, onPress, ...otherProps }) {
  return (
    <View style={styles.button}>
      <Button
        title={title}
        style={styles.button}
        {...otherProps}
        onPress={onPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 15,
  },
});
