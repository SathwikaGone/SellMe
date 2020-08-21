import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

export default function Home({ navigation }) {
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
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("LoginScreen")}
      >
        <Text style={styles.appText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signupButton}
        onPress={() => navigation.navigate("RegistrationScreen")}
      >
        <Text style={styles.appText}>Sign Up</Text>
      </TouchableOpacity>
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
    height: 60,
    backgroundColor: "pink",
    borderRadius: 40,
    margin: 5,
    justifyContent: "center",
  },
  appText: {
    fontSize: 22,
    textAlign: "center",
    textTransform: "uppercase",
    color: "white",
  },
  logo: {
    width: 150,
    height: 150,
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
  signupButton: {
    width: "100%",
    height: 60,
    backgroundColor: "lightblue",
    borderRadius: 40,
    justifyContent: "center",
    margin: 15,
  },
});
