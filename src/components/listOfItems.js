import React from "react";
import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-elements";
import Screen from "../components/screen";
export default function DisplayCard(props) {
  return (
    <Screen>
      <Card title={props.title} image={props.image}>
        <Text>{props.price}</Text>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({});
