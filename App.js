import React from "react";
import { StyleSheet } from "react-native";
import Home from "./src/screens/Home";
import ViewImage from "./src/screens/ViewImage";
import DisplayCard from "./src/screens/DisplayCard";
import ListingDetails from "./src/screens/listingDetails";
import MessageScreen from "./src/screens/MessageScreen";
import MyAccountScreen from "./src/screens/MyAccountScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegistrationScreen from "./src/screens/RegisterScreen";
import AddItem from "./src/screens/AddItem";
import Screen from "./src/components/screen";
import NavigationList from "./NavigationList";

export default function App() {
  return <NavigationList />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
