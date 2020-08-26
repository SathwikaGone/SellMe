import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, Text, Button } from "react-native";
import ListOfItems from "../components/listOfItems";
import listingsAPI from "../api/listing";
import Screen from "../components/screen";
// import ActivityIndicator from "../components/ActivityIndicator";
import { ActivityIndicator } from "react-native";
import useApi from "../api/useApi";

export default function DisplayCard() {
  const { data: listings, Error, loading, request: loadListings } = useApi(
    listingsAPI.getListing
  );

  useEffect(() => {
    // console.log("useeffect");
    loadListings();
  }, []);

  return (
    <Screen>
      {<ActivityIndicator animating={loading} size="large" />}
      {
        // Error && (
        //   <React.Fragment>
        //     <Text>reload</Text>
        //     <Button title="retry" />
        //   </React.Fragment>
        // )
      }

      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => {
          // console.log("item", item.images[0].url);
          return (
            <ListOfItems
              key={item.id}
              title={item.title}
              imageURL={item.images[0].url}
              price={item.price}
            />
          );
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
