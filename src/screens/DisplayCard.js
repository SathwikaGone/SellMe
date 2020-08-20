import React from "react";
import { StyleSheet } from "react-native";
import ListOfItems from "../components/listOfItems";
const items = [
  {
    name: "Black Jacket",
    id: 1,
    image: require("../../assets/jacket.jpg"),
    price: "$45",
  },
  {
    name: "Black Jacket",
    id: 2,
    image: require("../../assets/jacket.jpg"),
    price: "$150",
  },
  // {
  //   name: "Black Jacket",
  //   id: 3,
  //   image: require("../../assets/jacket.jpg"),
  //   price: "$75",
  // },
];

export default function DisplayCard() {
  return items.map((item) => (
    <ListOfItems
      key={item.id}
      title={item.name}
      image={item.image}
      price={item.price}
    />
  ));
}

const styles = StyleSheet.create({});
