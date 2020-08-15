import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import ListingContainer from "../components/listingContainer";
export default function listingDetails() {
  return (
    <SafeAreaView style={styles.displayCard}>
      <Image
        style={styles.images}
        source={require("../../assets/jacket.jpg")}
      />
      <Text style={styles.title}>Black Jacket</Text>
      <Text style={styles.subtitle}>45$</Text>
      <ListingContainer
        uimage={require("../../assets/jacket.jpg")}
        name="Mosh Hamedani"
        listings="5 listing"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  displayCard: {
    marginTop: 50,
  },
  images: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 5,
    paddingHorizontal: 5,
  },
  subtitle: {
    fontSize: 17,
    paddingHorizontal: 5,
  },
});
