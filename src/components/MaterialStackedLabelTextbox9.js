import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

function MaterialStackedLabelTextbox9(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.label}>Nº Chassi</Text>
      <TextInput
        placeholder="9BWJB45UXKP009659"
        style={styles.inputStyle}
        editable = {false}

      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    borderColor: "#D9D5DC",
    borderBottomWidth: 1
  },
  label: {
    color: "#000",
    opacity: 0.6,
    paddingTop: 16,
    fontSize: 12,
    fontFamily: "roboto-regular",
    textAlign: "left"
  },
  inputStyle: {
    flex: 1,
    backgroundColor: "rgba(15,15, 15,0.07)",
    color: "#000",
    alignSelf: "stretch",
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 16
  }
});

export default MaterialStackedLabelTextbox9;
