import React, { Component } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import MaterialMessageTextbox2 from "../components/MaterialMessageTextbox2";
import MaterialMessageTextbox3 from "../components/MaterialMessageTextbox3";
import MaterialButtonViolet from "../components/MaterialButtonViolet";

function Untitled1(props) {
  return (
    <View style={styles.container}>
      <MaterialMessageTextbox2
        style={styles.materialMessageTextbox2}
      ></MaterialMessageTextbox2>
      <MaterialMessageTextbox3
        style={styles.materialMessageTextbox3}
      ></MaterialMessageTextbox3>
      <MaterialButtonViolet
        style={styles.materialButtonViolet}
      ></MaterialButtonViolet>
      <StatusBar></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialMessageTextbox2: {
    width: 375,
    height: 90,
    marginTop: 189,
    marginLeft: 6
  },
  materialMessageTextbox3: {
    width: 375,
    height: 90,
    marginTop: 20,
    marginLeft: 5
  },
  materialButtonViolet: {
    width: 100,
    height: 36,
    marginTop: 65,
    marginLeft: 117
  }
});

export default Untitled1;
