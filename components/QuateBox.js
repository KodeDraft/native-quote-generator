import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

export default function QuateBox() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const getQuate = async () => {
    const response = await axios
      .get("https://free-quotes-api.herokuapp.com/")
      .catch((err) => console.log(err));

    const { author } = response.data;
    const { quote } = response.data;

    setAuthor(author);
    setQuote(quote);
  };

  useEffect(() => {
    getQuate();
  }, []);

  return (
    <View style={styles.backgroundColor}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.headingText}>Quate's For The Day</Text>
          <Text style={styles.quote}>
            ❝{"   "}
            {quote}
            {"  "}❞
          </Text>
          <Text style={styles.author}>
            By: {author.length < 1 ? "Unknown" : author}
          </Text>
          <TouchableOpacity style={styles.btn} onPress={getQuate}>
            <Text style={styles.btnText}>New Quote</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: "#FCBA02",
    width: "100%",
    height: "100%",
  },
  box: {
    backgroundColor: "#fff",
    width: "90%",
    marginTop: 90,
    borderRadius: 10,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  headingText: {
    textAlign: "center",
    fontSize: 25,
    paddingTop: 30,
    fontFamily: "titleBold",
    color: "dodgerblue",
    fontWeight: "bold",
  },
  quoteSymbol: {
    width: 40,
    height: 80,
  },
  quote: {
    fontSize: 25,
    alignSelf: "center",
    textAlign: "center",
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    fontFamily: "normal",
  },
  author: {
    fontSize: 20,
    textAlign: "left",
    paddingLeft: 20,
    marginTop: 30,
    color: "dodgerblue",
    fontWeight: "800",
    fontFamily: "normal",
  },
  btn: {
    backgroundColor: "dodgerblue",
    width: "90%",
    alignSelf: "center",
    padding: 10,
    borderRadius: 3,
    marginTop: 20,
    marginBottom: 30,
  },
  btnText: {
    color: "#fff",
    fontWeight: "800",
    textAlign: "center",
  },
});
