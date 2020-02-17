import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialHeader11 from "../components/MaterialHeader11";
import EdtLicensePlate from "../components/EdtLicensePlate";
import EdtChassis from "../components/EdtChassis";
import MaterialButtonViolet2 from "../components/MaterialButtonViolet2";

function Search(props) {
  return (
    <View style={styles.container}>
      {/* <MaterialHeader11 style={styles.materialHeader11}></MaterialHeader11> */}
      <EdtLicensePlate style={styles.materialMessageTextbox2}></EdtLicensePlate>
      <EdtChassis style={styles.materialMessageTextbox3}></EdtChassis>
      <MaterialButtonViolet2
        style={styles.materialButtonViolet2}
      ></MaterialButtonViolet2>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialHeader11: {
    width: 360,
    height: 56,
    alignSelf: "center"
  },
  materialMessageTextbox2: {
    width: 342,
    height: 90,
    marginTop: 20,
    marginLeft: 8
  },
  materialMessageTextbox3: {
    width: 342,
    height: 90,
    alignSelf: "flex-end",
    marginTop: 24,
    marginRight: 9
  },
  materialButtonViolet2: {
    height: 43,
    borderRadius: 45,
    marginTop: 32,
    marginLeft: 61,
    marginRight: 84
  }
});

export default Search;
