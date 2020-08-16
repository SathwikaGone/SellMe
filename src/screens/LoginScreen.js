import React from "react";
import { StyleSheet, View, Image } from "react-native";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import Screen from "../components/screen";

export default function LoginScreen() {
  return (
    <Screen>
      <View style={styles.logoContainer}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
      </View>
      <View style={styles.form}>
        <AppTextInput icon="email" placeholder="Email Address" />
        <AppTextInput icon="lock" placeholder="Password" secureTextEntry />
        <AppButton
          title="Login"
          color="coral"
          onPress={() => console.log("login")}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  form: {
    marginTop: 70,
  },
});
