import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";

export default function DisplayCard() {
  return (
    <View style={styles.displayCard}>
      <Card title="tshirt" image={require("../../assets/jacket.jpg")}>
        <Text>15$</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  displayCard: {
    marginTop: 50,
  },
});
