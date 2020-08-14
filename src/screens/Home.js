import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  PickerIOSComponent,
  Image,
} from "react-native";

export default function Home() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../../assets/Home1.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/logo.png")}
        ></Image>
        <Text style={styles.text}>Selle what you dont want</Text>
      </View>

      <View style={styles.loginButton}></View>
      <View style={styles.signupButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "pink",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
  signupButton: {
    width: "100%",
    height: 70,
    backgroundColor: "lightblue",
  },
});
