import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import AppPicker from "../components/AppPicker";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import color from "../config/colors";
import ImageInput from "../components/ImageInput";
import { Formik } from "formik";
import * as Yup from "yup";

const data = [
  { value: "Furniture", id: 1 },
  { value: "Pet Suplies", id: 2 },
  { value: "Vehicles ", id: 3 },
];
const validationSchema = Yup.object().shape({
  Title: Yup.string().required().min(3).label("Title"),
  Price: Yup.number().required().label("Price"),
  catogery: Yup.string().required().label("Catogery"),
  Description: Yup.string().required().label("Description"),
});
export default function AddItem() {
  const [selected, setselected] = useState("");
  const [ImagesList, setImagesList] = useState([]);

  return (
    <View>
      <Formik
        initialValues={{
          Title: "",
          Price: 0,
          catogery: "",
          Description: "",
        }}
        onSubmit={(value) => console.log("value", value)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, touched, setFieldTouched, errors }) => (
          <View style={styles.form}>
            <ImageInput
              name="imageList"
              imagelist={(value) => setImagesList(value)}
            />

            <AppTextInput
              placeholder="Title"
              name="Title"
              onBlur={() => setFieldTouched("Title")}
              touched={touched.Title}
              error={errors.Title}
              onChangeText={handleChange("Title")}
            />
            <AppTextInput
              placeholder="Price"
              name="Price"
              onBlur={() => setFieldTouched("Price")}
              touched={touched.Price}
              error={errors.Price}
              onChangeText={handleChange("Price")}
            />
            <AppPicker
              title="Category"
              icon="chevron-down"
              data={data}
              width={120}
              touched={touched.catogery}
              error={errors.catogery}
              name="catogery"
              selectedCat={handleChange("catogery")}
            />
            <AppTextInput
              placeholder="Description"
              name="Description"
              touched={touched.Description}
              onBlur={() => setFieldTouched("Description")}
              error={errors.Description}
              onChangeText={handleChange("Description")}
            />
            <AppButton
              title="Add Item"
              color={color.primary}
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({});
