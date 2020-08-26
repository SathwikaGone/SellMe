// import React from "react";
// import LottieView from "lottie-react-native";
// export default function ActivityIndicator({ visibility }) {
//   if (!visibility) return null;
//   return (
//     <LottieView
//       autoPlay
//       loop
//       source={require("../../assets/animations/loader.json")}
//     />
//   );
// }

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";
export default function ActivityIndicator({ visible }) {
  if (!visible) return null;
  return (
    <LottieView
      autoPlay
      loop
      source={require("../../assets/animations/loader.json")}
    />
  );
}
const styles = StyleSheet.create({});
