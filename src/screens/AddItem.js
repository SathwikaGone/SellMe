import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppPicker from "../components/AppPicker";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/screen";

const data = [
  { value: "Furniture", id: 1 },
  { value: "Pet Suplies", id: 2 },
  { value: "Vehicles ", id: 3 },
];

export default function AddItem() {
  const [selected, setselected] = useState("");
  return (
    <View>
      <AppTextInput placeholder="Title" />
      <AppTextInput placeholder="Price" />
      <AppPicker
        title="Category"
        icon="chevron-down"
        data={data}
        selectedCat={(title) => setselected(title)}
      />
      <AppTextInput placeholder="Description" />
    </View>
  );
}

const styles = StyleSheet.create({});
