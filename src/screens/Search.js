import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialHeader11 from "../components/MaterialHeader11";
import EdtLicensePlate from "../components/Search/EdtLicensePlate";
import EdtChassis from "../components/Search/EdtChassis";
import BuscaVistoria from "../components/Search/BuscaVistoria";

function Search(props) {
  return (
    <View style={styles.container}>
      {/* <MaterialHeader11 style={styles.materialHeader11}></MaterialHeader11> */}
      <EdtLicensePlate style={styles.materialMessageTextbox2}></EdtLicensePlate>
      <EdtChassis style={styles.materialMessageTextbox3}></EdtChassis>
      <BuscaVistoria
        style={styles.materialButtonViolet2}
      ></BuscaVistoria>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center"
  },
  materialHeader11: {
    // width: 360,
    height: 56,
    alignSelf: "center"
  },
  materialMessageTextbox2: {
    width: 'auto',
    height: 90,
    marginTop: 12,
    marginLeft: 9,
    marginRight: 9
  },
  materialMessageTextbox3: {
width: 'auto',
    height: 90,
    // alignSelf: "flex-end",
    marginTop: 12,
    marginRight: 9,
    marginLeft: 9
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
