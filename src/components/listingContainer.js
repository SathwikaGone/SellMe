import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function listingContainer({
  uimage,
  renderRightActions,
  listings,
  name,
  ...otherProps
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={styles.ListingContainer}>
        <Image style={styles.imagess} source={uimage} />
        <View style={styles.Listing}>
          <Text style={styles.Name} {...otherProps}>
            {name}
          </Text>
          <Text style={styles.listing} {...otherProps}>
            {listings}
          </Text>
        </View>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="chevron-right" sixe={25} />
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
    flex: 1,
  },
  imagess: {
    marginTop: 25,
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
  iconContainer: {
    justifyContent: "center",
  },
});
