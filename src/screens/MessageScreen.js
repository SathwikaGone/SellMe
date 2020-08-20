import React, { useState } from "react";
import { StyleSheet, View, FlatList, TouchableHighlight } from "react-native";
import ListingContainer from "../components/listingContainer";
import Screen from "../components/screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const initialmessages = [
  {
    name: "sathwika",
    id: "ABCD",
    description: "desc ",
    image: require("../../assets/jacket.jpg"),
  },
  {
    name: "Hitesh",
    id: "ABCDE",
    description: "desc",
    image: require("../../assets/jacket.jpg"),
  },
  {
    name: "Thirupathi Rao",
    id: "ABCDf",
    description: "desc",
    image: require("../../assets/jacket.jpg"),
  },
  {
    name:
      "Laxmi Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    id: "ABCDg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: require("../../assets/jacket.jpg"),
  },
];

export default function MessageScreen() {
  const [refreshingData, setrefreshingData] = useState(false);
  const [Data, setData] = useState(initialmessages);
  let renderitem = ({ item }) => (
    <TouchableHighlight
      onPress={() => console.log("item")}
      underlayColor="#DDDDDD"
    >
      <ListingContainer
        uimage={item.image}
        name={item.name}
        numberOfLines={1}
        listings={item.description}
        renderRightActions={() => {
          <View style={styles.box}>
            <MaterialCommunityIcons name="trash-can" />
          </View>;
        }}
      />
    </TouchableHighlight>
  );
  return (
    <Screen style={styles.container}>
      <FlatList
        data={Data}
        keyExtractor={(item) => item.id}
        renderItem={renderitem}
        refreshing={refreshingData}
        onRefresh={() => setData(initialmessages)}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "orange",
    width: 70,
  },
  container: {
    flex: 1,
  },
});
