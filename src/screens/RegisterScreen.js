import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppTextInput from "../components/AppTextInput";
import { Formik } from "formik";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import * as Yup from "yup";
import ErrorMessage from "../components/ErrorMessage";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(3).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

export default function RegisterScreen() {
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={(values) => {
        console.log(values);
      }}
      validationSchema={validationSchema}
    >
      {({ handleChange, handleSubmit, errors, touched, setFieldTouched }) => (
        <View style={styles.form}>
          <AppTextInput
            name="name"
            icon="account"
            autoCapitalize="none"
            autoCorrect={false}
            onBlur={() => setFieldTouched("name")}
            placeholder="Name"
            onChangeText={handleChange("name")}
          />
          <ErrorMessage error={errors.name} touched={touched.name} />
          <AppTextInput
            name="email"
            icon="email"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email"
            onBlur={() => setFieldTouched("email")}
            onChangeText={handleChange("email")}
          />
          <ErrorMessage error={errors.email} touched={touched.email} />

          <AppTextInput
            name="password"
            icon="lock"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="password"
            secureTextEntry
            onBlur={() => setFieldTouched("password")}
            onChangeText={handleChange("password")}
          />
          <ErrorMessage error={errors.password} touched={touched.password} />

          <AppButton
            title="REGISTER"
            color={colors.primary}
            onPress={handleSubmit}
          />
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 70,
    marginHorizontal: 15,
  },
});
