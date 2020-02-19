import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

function FbAddSurvey(props) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={[styles.container, props.style]}
    onPress={()=> navigation.navigate('Search')} 
     >
      <Icon name="plus"  style={styles.icon}></Icon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3F51B5",
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    minWidth: 40,
    minHeight: 40,
    borderRadius: 28,
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  icon: {
    color: "#fff",
    fontFamily: "Roboto",
    fontSize: 18,
    alignSelf: "center",
    // width: 24,
    // height: 24
  }
});

export default FbAddSurvey;
