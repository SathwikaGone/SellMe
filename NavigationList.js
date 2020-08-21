import React from "react";
import { StyleSheet } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./src/screens/Home";
import ViewImage from "./src/screens/ViewImage";
import DisplayCard from "./src/screens/DisplayCard";
import ListingDetails from "./src/screens/listingDetails";
import MessageScreen from "./src/screens/MessageScreen";
import MyAccountScreen from "./src/screens/MyAccountScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegistrationScreen from "./src/screens/RegisterScreen";
import AddItem from "./src/screens/AddItem";

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
    <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
    <Stack.Screen name="DisplayCard" component={DisplayCard} />
  </Stack.Navigator>
);

export default function NavigationList() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
