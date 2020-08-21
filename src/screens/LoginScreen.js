import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import Screen from "../components/screen";
import { Formik } from "formik";
import ErrorMessage from "../components/ErrorMessage";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

export default function LoginScreen({ navigation }) {
  return (
    <Screen>
      <View style={styles.logoContainer}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
      </View>

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={() => navigation.navigate("DisplayCard")}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, touched, setFieldTouched }) => (
          <View style={styles.form}>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              name="email"
              onBlur={() => setFieldTouched("email")}
              placeholder="Email Address"
              onChangeText={handleChange("email")}
              keyboardType="email-address"
            />
            <ErrorMessage error={errors.email} touched={touched.email} />
            <AppTextInput
              icon="lock"
              name="password"
              placeholder="Password"
              onBlur={() => setFieldTouched("password")}
              secureTextEntry
              onChangeText={handleChange("password")}
            />
            <ErrorMessage error={errors.password} touched={touched.password} />
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
