import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ListingContainer from "../components/listingContainer";
import Screen from "../components/screen";
import IconName from "../components/iconName";
import colors from "../config/colors";
const User = [
  {
    name: "Sathwika",
    id: "ABCD",
    description: "This is Javascript Expertise",
    image: require("../../assets/jacket.jpg"),
    email: "gonesathwika@gmail.com",
  },
];

export default function MyAccountScreen() {
  return (
    <Screen>
      <ListingContainer
        uimage={User[0].image}
        name={User[0].name}
        listings={User[0].email}
      />
      <View style={styles.container}>
        <IconName
          Name="format-list-bulleted"
          Title="My Listings"
          bgColor={colors.primary}
        />
        <IconName Name="email" Title="My Messages" bgColor={colors.secondary} />
        <IconName Name="logout" Title="Log Out" bgColor={colors.yellow} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
  },
});
