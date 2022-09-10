import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableHighlight,
} from "react-native";
import StatusBox from "../../components/StatusBox";
import Plus from "../../assets/camera-solid.svg";
import AppNavBar from "../../components/AppNavBar";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Status() {
  return (
    <View style={css.screen}>
      <View style={css.header}>
        <Text style={css.text}>Status</Text>
        <TextInput
          placeholderTextColor={"#b9b9b9"}
          style={css.textInput}
          placeholder="Pesquisar"
        />
      </View>
      <View>
        <StatusBox name={"Meu Status"} time={1} />
      </View>
      <View style={css.barrier}>
        <Text style={css.textSecond}>ATUALIZAÇÕES RECENTES</Text>
      </View>
      <View>
        <StatusBox name={"Elias"} time={1} />
        <StatusBox name={"Dalila"} time={2} />
        <StatusBox name={"Luis"} time={4} />
        <StatusBox name={"Gabriel"} time={5} />
      </View>
      <TouchableHighlight style={css.addStatusButton}>
        <Plus style={css.svg}/>
      </TouchableHighlight>
    </View>
  );
}

const css = StyleSheet.create({
  screen: {
    backgroundColor: "white",
    height: windowHeight,
    width: windowWidth,
  },
  header: {
    width: windowWidth,
    height: (windowHeight * 1) / 5,
    backgroundColor: "white",
    flexDirection: "column",
    alignContent: "center",
    marginTop : "3%",
  },
  text: {
    fontSize: 30,
    fontWeight: "600",
    color: "black",
    width: (windowWidth * 8) / 10,
    textAlign: "left",
    paddingTop: 42,
    paddingLeft: "7%",
    marginBottom : "3%",
  },
  textInput: {
    width: "80%",
    marginLeft: "7%",
    border: "none",
    borderRadius: 25,
    backgroundColor: "#D2D2D2aa",
    height: 50,
    color: "white",
    paddingLeft: 15,
  },
  textSecond: {
    color: "#7B7B7B",
    paddingLeft: "7%",
    fontWeight : "400",
    fontSize : 14,
    lineHeight : 17,
  },
  barrier: {
    height: "5%",
    width: windowWidth,
    backgroundColor: "#white",
    flexDirection: "row",
    alignItems : "flex-end",
  },
  addStatusButton: {
    width: windowHeight / 11 - 35,
    height: windowHeight / 11 - 35,
    borderRadius : (windowHeight / 11 - 30)/2,
    backgroundColor : "#1976D2",
    position: "absolute",
    bottom: windowHeight / 8,
    right: windowWidth / 20,
    justifyContent : "center",
    alignItems : "center",
  },
  svg : {
    width : "50%",
    height :  "50%",
  }
});
