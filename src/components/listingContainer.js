import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
export default function listingContainer(props) {
  return (
    <Swipeable renderRightActions={props.renderRightActions}>
      <View style={styles.ListingContainer}>
        <Image style={styles.imagess} source={props.uimage} />
        <View style={styles.Listing}>
          <Text style={styles.Name}>{props.name}</Text>
          <Text style={styles.listing}>{props.listings}</Text>
        </View>
      </View>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  ListingContainer: {
    flexDirection: "row",
  },
  Listing: {
    flexDirection: "column",
    padding: 15,
  },
  imagess: {
    marginTop: 25,
    marginLeft: 5,
    borderRadius: 45,
    height: 80,
    width: 80,
  },
  Name: {
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 5,
    paddingHorizontal: 3,
  },
  listing: {
    paddingHorizontal: 3,
  },
});
