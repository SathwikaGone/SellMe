import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ListingContainer from "../components/listingContainer";
import Screen from "../components/screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const initialmessages = [
  {
    name: "sathwika",
    id: "ABCD",
    description: "desc",
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
    name: "Laxmi",
    id: "ABCDg",
    description: "desc",
    image: require("../../assets/jacket.jpg"),
  },
];

export default function MessageScreen() {
  const [refreshingData, setrefreshingData] = useState(false);
  const [Data, setData] = useState(initialmessages);
  let renderitem = ({ item }) => (
    <ListingContainer
      uimage={item.image}
      name={item.name}
      listings={item.description}
      renderRightActions={() => {
        <View style={styles.box}>
          <MaterialCommunityIcons name="trash-can" />
        </View>;
      }}
    />
  );
  return (
    <Screen style={styles.container}>
      <FlatList
        data={Data}
        keyExtractor={(item) => item.id}
        renderItem={renderitem}
        refreshing={refreshingData}
        onRefresh={() =>
          setData([
            {
              name: "sathwika",
              id: "ABCD",
              description: "desc",
              image: require("../../assets/jacket.jpg"),
            },
          ])
        }
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
