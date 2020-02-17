import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialHeader13 from "../components/MaterialHeader13";
import MaterialRadio from "../components/MaterialRadio";
import MaterialRadio1 from "../components/MaterialRadio1";
import MaterialUnderlineTextbox from "../components/MaterialUnderlineTextbox";

function SurveyPrint(props) {
  return (
    <View style={styles.container}>
      <MaterialHeader13 style={styles.materialHeader13}></MaterialHeader13>
      <Text style={styles.loremIpsum}>Escolha a opção de pesquisa</Text>
      <View style={styles.materialRadioRow}>
        <MaterialRadio style={styles.materialRadio}></MaterialRadio>
        <Text style={styles.placa}>Placa</Text>
        <MaterialRadio1 style={styles.materialRadio1}></MaterialRadio1>
        <Text style={styles.nVistoria}>Nº Vistoria</Text>
      </View>
      <Text style={styles.informeAPlaca}>Informe a placa</Text>
      <MaterialUnderlineTextbox
        style={styles.materialUnderlineTextbox}
      ></MaterialUnderlineTextbox>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(15,15, 15,0)"
  },
  materialHeader13: {
    height: 56
  },
  loremIpsum: {
    color: "rgba(0,0,0,1)",
    fontSize: 14,
    fontFamily: "roboto-700",
    marginTop: 21,
    marginLeft: 16
  },
  materialRadio: {
    width: 40,
    height: 40
  },
  placa: {
    color: "#121212",
    fontFamily: "roboto-regular",
    marginLeft: 9,
    marginTop: 13
  },
  materialRadio1: {
    width: 40,
    height: 40,
    marginLeft: 85
  },
  nVistoria: {
    color: "#121212",
    fontFamily: "roboto-regular",
    marginLeft: 10,
    marginTop: 13
  },
  materialRadioRow: {
    height: 40,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 16,
    marginRight: 57
  },
  informeAPlaca: {
    color: "rgba(0,0,0,1)",
    fontSize: 14,
    fontFamily: "roboto-700",
    marginTop: 28,
    marginLeft: 16
  },
  materialUnderlineTextbox: {
    width: 327,
    height: 43,
    backgroundColor: "rgba(15,15, 15,0.07)",
    borderRadius: 2,
    marginTop: 5,
    marginLeft: 16
  }
});

export default SurveyPrint;
