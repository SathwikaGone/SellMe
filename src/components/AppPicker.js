import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import color from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function AppPicker({ icon, width, title, data }) {
  const [ShowModal, setShowModal] = useState(false);
  const [selectedcategory, setselectedcategory] = useState("");
  let titlep = selectedcategory ? selectedcategory.value : title;
  return (
    <React.Fragment>
      <TouchableWithoutFeedback
        style={styles.container}
        onPress={() => setShowModal(true)}
      >
        <Text style={[styles.textinput, { width: width }]}>{titlep}</Text>
        {icon ? <MaterialCommunityIcons name={icon} size={30} /> : null}
      </TouchableWithoutFeedback>
      <Modal visible={ShowModal}>
        <Button title="close" onPress={() => setShowModal(false)} />
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Text
                style={styles.textinput}
                onPress={() => {
                  setselectedcategory(item);
                  setShowModal(false);
                }}
              >
                {item.value}
              </Text>
            </TouchableOpacity>
          )}
        ></FlatList>
      </Modal>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 15,
  },
  textinput: {
    padding: 5,
    fontSize: 18,
    color: "black",
  },
});
