import React, { Component } from "react";
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import { StyleSheet, View, StatusBar, Button ,navigate,navigation } from "react-native";
import EdtUsername from "../components/EdtUsername";
import EdtPassword from "../components/EdtPassword";
import BtnLogin from "../components/BtnLogin";
// import Home from './Home';

function Login() {
  // const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.materialMessageTextboxStack}>
        <EdtUsername style={styles.materialMessageTextbox}></EdtUsername>
        <EdtPassword style={styles.materialMessageTextbox1}></EdtPassword>
      </View>
      <BtnLogin 
      style={styles.materialButtonViolet}
      
    
      >
       </BtnLogin>
{/* <Button title="Login" onPress={()=> navigation.navigate(Home)}       style={styles.materialButtonViolet} 
 >texto</Button> */}
      <StatusBar                                  
        animated={false}
        hidden={false}
        backgroundColor="rgba(63,81,181,1)"
      ></StatusBar>
      {/* <Home/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialMessageTextbox: {
    top: 0,
    left: 1,
    height: 86,
    position: "absolute",
    right: 1
  },
  materialMessageTextbox1: {
    top: 85,
    left: 0,
    height: 86,
    position: "absolute",
    right: 0
  },
  materialMessageTextboxStack: {
    height: 171,
    marginTop: 239,
    marginLeft: 15,
    marginRight: 13
  },
  materialButtonViolet: {
    height: 43,
    borderRadius: 46,
    marginTop: 32,
    marginLeft: 73,
    marginRight: 73
  }
});

export default Login;
