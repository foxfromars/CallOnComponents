import React,{useState} from "react";
import {View, StyleSheet, Dimensions, Text} from "react-native";

import StatusSvg from "../../assets/Status.svg";
import ChatSvg from "../../assets/chat.svg"; 
import PerfilSvg from "../../assets/Perfil.svg";
import ConfigSvg from "../../assets/config.svg";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


export default function AppNavBar(){
  return(
    <View style={css.navBarBox}>
      <View style={css.navBarSection}>
        <StatusSvg/>
        <Text>Status</Text>
      </View>
      <View style={css.navBarSection}>
        <ChatSvg/>
        <Text>Conversas</Text>
      </View>
      <View style={css.navBarSection}>
        <PerfilSvg/>
        <Text>Perfil</Text>
      </View>
      <View style={css.navBarSection}>
        <ConfigSvg/>
        <Text>Configurações</Text>
      </View>
    </View>
  )
}

const css = StyleSheet.create({
  navBarBox : {
    width : windowWidth,
    height : windowHeight / 11,
    backgroundColor : "#D2D2D2aa",
    position : "absolute",
    bottom : 0,
    right : 0,
    flexDirection : "row",
    justifyContent : "space-between",
    alignItems : "center",
    paddingHorizontal : "5%",
  },
  navBarSection : {
    justifyContent : "space-between", 
    alignItems : "center",
  }
})
