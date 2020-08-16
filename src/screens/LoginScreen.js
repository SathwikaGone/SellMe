import React from "react";
import { StyleSheet, View, Image } from "react-native";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import Screen from "../components/screen";
import { Formik } from "formik";

export default function LoginScreen() {
  return (
    <Screen>
      <View style={styles.logoContainer}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
      </View>

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log("submitted", values)}
      >
        {({ handleChange, handleSubmit }) => (
          <View style={styles.form}>
            <AppTextInput
              icon="email"
              name="email"
              placeholder="Email Address"
              onChangeText={handleChange("email")}
            />
            <AppTextInput
              icon="lock"
              name="password"
              placeholder="Password"
              secureTextEntry
              onChangeText={handleChange("password")}
            />
            <AppButton title="Login" color="coral" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
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
