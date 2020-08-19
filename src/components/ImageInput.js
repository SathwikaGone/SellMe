import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function ImageInput() {
  const [ImageDetails, setImageDetails] = useState([]);

  const permissions = async () => {
    const result = await ImagePicker.requestCameraRollPermissionsAsync({
      mediaType: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5,
    });
    if (!result.granted)
      alert("you need to enable permissions to access photos");
  };

  useEffect(() => {
    permissions();
  }, []);

  let onSelectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      let list = [...ImageDetails];
      list.push(result.uri);
      setImageDetails(list);
    } catch (error) {
      console.log("error in onselectImage function", error);
    }
  };

  let onImagedClicked = (item) => {
    console.log("alert");
    Alert.alert(
      "Delete Image",
      "Do you want to delete this image?",
      [
        {
          text: "Yes",
          onPress: () => {
            let UpdatedArray = ImageDetails.filter((iitem) => iitem !== item);
            setImageDetails(UpdatedArray);
          },
        },
        {
          text: "NO",
          onPress: () => console.log("OK Pressed"),
          style: "cancel",
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      {ImageDetails.length > 0
        ? ImageDetails.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => onImagedClicked(item)}>
              <Image source={{ uri: item }} style={styles.imageStyle} />
            </TouchableOpacity>
          ))
        : null}
      <View style={styles.iconStyles}>
        <MaterialCommunityIcons
          name="camera"
          onPress={onSelectImage}
          size={40}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  imageStyle: {
    width: 100,
    height: 100,
    margin: 7,
    borderRadius: 15,
  },
  iconStyles: {
    width: 50,
    height: 50,
    justifyContent: "center",
  },
});
