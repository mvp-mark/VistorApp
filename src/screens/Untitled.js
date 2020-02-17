import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialHeader12 from "../components/MaterialHeader12";
import MaterialStackedLabelTextbox1 from "../components/MaterialStackedLabelTextbox1";
import MaterialStackedLabelTextbox3 from "../components/MaterialStackedLabelTextbox3";
import MaterialStackedLabelTextbox4 from "../components/MaterialStackedLabelTextbox4";
import MaterialStackedLabelTextbox6 from "../components/MaterialStackedLabelTextbox6";
import MaterialStackedLabelTextbox5 from "../components/MaterialStackedLabelTextbox5";
import MaterialStackedLabelTextbox7 from "../components/MaterialStackedLabelTextbox7";
import MaterialStackedLabelTextbox10 from "../components/MaterialStackedLabelTextbox10";
import MaterialStackedLabelTextbox8 from "../components/MaterialStackedLabelTextbox8";
import MaterialStackedLabelTextbox9 from "../components/MaterialStackedLabelTextbox9";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <MaterialHeader12 style={styles.materialHeader12}></MaterialHeader12>
      <View style={styles.rect}>
        <Text style={styles.informacoes}>Informações do Veículo</Text>
      </View>
      <View style={styles.materialStackedLabelTextbox12Row}>
        <MaterialStackedLabelTextbox1
          style={styles.materialStackedLabelTextbox12}
        ></MaterialStackedLabelTextbox1>
        <MaterialStackedLabelTextbox3
          style={styles.materialStackedLabelTextbox3}
        ></MaterialStackedLabelTextbox3>
      </View>
      <View style={styles.materialStackedLabelTextbox4Row}>
        <MaterialStackedLabelTextbox4
          style={styles.materialStackedLabelTextbox4}
        ></MaterialStackedLabelTextbox4>
        <MaterialStackedLabelTextbox6
          style={styles.materialStackedLabelTextbox6}
        ></MaterialStackedLabelTextbox6>
      </View>
      <View style={styles.materialStackedLabelTextbox5Row}>
        <MaterialStackedLabelTextbox5
          style={styles.materialStackedLabelTextbox5}
        ></MaterialStackedLabelTextbox5>
        <MaterialStackedLabelTextbox7
          style={styles.materialStackedLabelTextbox7}
        ></MaterialStackedLabelTextbox7>
      </View>
      <View style={styles.materialStackedLabelTextbox10Row}>
        <MaterialStackedLabelTextbox10
          style={styles.materialStackedLabelTextbox10}
        ></MaterialStackedLabelTextbox10>
        <MaterialStackedLabelTextbox8
          style={styles.materialStackedLabelTextbox8}
        ></MaterialStackedLabelTextbox8>
      </View>
      <MaterialStackedLabelTextbox9
        style={styles.materialStackedLabelTextbox9}
      ></MaterialStackedLabelTextbox9>
      <View style={styles.rect3}>
        <Text style={styles.fotosDoVeiculo}>Fotos do Veículo</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialHeader12: {
    height: 56
  },
  rect: {
    height: 30,
    backgroundColor: "rgba(63,81,181,0.91)"
  },
  informacoes: {
    color: "rgba(255,255,255,1)",
    fontFamily: "roboto-700",
    textAlign: "left",
    marginTop: 9,
    marginLeft: 12
  },
  materialStackedLabelTextbox12: {
    width: 158,
    height: 60
  },
  materialStackedLabelTextbox3: {
    width: 162,
    height: 60,
    marginLeft: 19
  },
  materialStackedLabelTextbox12Row: {
    height: 60,
    flexDirection: "row",
    marginTop: 60,
    marginLeft: 10,
    marginRight: 11
  },
  materialStackedLabelTextbox4: {
    width: 156,
    height: 60
  },
  materialStackedLabelTextbox6: {
    width: 164,
    height: 60,
    marginLeft: 17
  },
  materialStackedLabelTextbox4Row: {
    height: 60,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 13,
    marginRight: 10
  },
  materialStackedLabelTextbox5: {
    width: 159,
    height: 60
  },
  materialStackedLabelTextbox7: {
    width: 162,
    height: 60,
    marginLeft: 18,
    marginTop: 1
  },
  materialStackedLabelTextbox5Row: {
    height: 61,
    flexDirection: "row",
    marginTop: 3,
    marginLeft: 10,
    marginRight: 11
  },
  materialStackedLabelTextbox10: {
    width: 159,
    height: 60
  },
  materialStackedLabelTextbox8: {
    width: 162,
    height: 60,
    marginLeft: 18
  },
  materialStackedLabelTextbox10Row: {
    height: 60,
    flexDirection: "row",
    marginTop: -248,
    marginLeft: 10,
    marginRight: 11
  },
  materialStackedLabelTextbox9: {
    width: 338,
    height: 60,
    marginTop: 190,
    marginLeft: 11
  },
  rect3: {
    width: 360,
    height: 30,
    backgroundColor: "rgba(63,81,181,0.91)",
    marginTop: 19,
    alignSelf: "center"
  },
  fotosDoVeiculo: {
    color: "rgba(255,255,255,1)",
    fontFamily: "roboto-700",
    textAlign: "left",
    marginTop: 9,
    marginLeft: 13
  }
});

export default Untitled;
