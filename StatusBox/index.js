import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function StatusBox(props) {
  return (
    <View style={css.statusBox}>
      <View style={css.picture}></View>
      <View style={css.statusBoxText}>
        <Text style={css.textPrim}>{props.name}</Text>
        <Text style={css.textSec}>{`há ${props.time}h`}</Text>
      </View>
    </View>
  );
}

const css = StyleSheet.create({
  statusBox: {
    backgroundColor: "#D2D2D2aa",
    width: windowWidth,
    height: windowHeight / 11,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: "7%",
    marginBottom : "0.5%",
  },
  textPrim: {
    fontSize: 16,
    fontWeight: "500",
    color: "black",
  },
  textSec: {
    fontSize: 14,
    color: "#b9b9b9",
  },
  picture: {
    width: windowHeight / 11 - 20,
    height: windowHeight / 11 - 20,
    borderRadius: (windowHeight / 11 - 20) / 2,
    backgroundColor: "#AAAAAA",
  },
  statusBoxText : {
    width: windowWidth * 0.3,
    paddingLeft : "2%", 
  }
});
