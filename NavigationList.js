import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
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
    <Stack.Screen name="DisplayCard" component={TabNavigation} />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const TabNavigation = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="DisplayCard"
      options={{
        tabBarLabel: "Feed",

        tabBarIcon: ({ size }) => (
          <MaterialCommunityIcons name="home" size={size} />
        ),
      }}
      component={DisplayCard}
    />
    <Tab.Screen
      name="AddItem"
      component={AddItem}
      options={{
        tabBarButton: (props) => <TouchableOpacity {...props} />,
      }}
    />
    <Tab.Screen
      name="MyAccountScreen"
      component={MyAccountScreen}
      options={{
        tabBarLabel: "My Account",
        tabBarIcon: ({ size }) => (
          <MaterialCommunityIcons name="account" size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default function NavigationList() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
