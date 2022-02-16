import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import QuateBox from "./components/QuateBox";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const getFonts = () =>
    Font.loadAsync({
      lightItalicFont: require("./assets/fonts/Montserrat-Italic-VariableFont_wght.ttf"),
      lightFont: require("./assets/fonts/Montserrat-VariableFont_wght.ttf"),
      titleBold: require("./assets/fonts/static/Montserrat-ExtraBold.ttf"),
      normal: require("./assets/fonts/static/Montserrat-SemiBold.ttf"),
    });

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <QuateBox />
      </View>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={() => console.log("error")}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
