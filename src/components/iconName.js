import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function iconName(props) {
  return (
    <View style={styles.container}>
      <View
        style={[styles.icons, { backgroundColor: props.bgColor || "orange" }]}
      >
        <MaterialCommunityIcons
          name={props.Name}
          size={props.Size || 30}
          color="white"
        />
      </View>

      <Text style={styles.text}> {props.Title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    margin: 7,
  },
  icons: {
    backgroundColor: "orange",
    borderRadius: 35,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    paddingLeft: 10,
  },
});
