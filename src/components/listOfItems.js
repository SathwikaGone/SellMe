import React from "react";
import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-elements";
import Screen from "../components/screen";
export default function listOfItems(props) {
  // console.log("lisiofitems", props.imageURL);
  return (
    <Screen>
      <Card image={{ uri: props.imageURL }}>
        <Text>{props.title}</Text>
        <Text>{props.price}</Text>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({});
