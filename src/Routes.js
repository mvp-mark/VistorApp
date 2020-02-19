// In App.js in a new project

import * as React from 'react';
import 'react-native-gesture-handler';


import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from "react-native-vector-icons/FontAwesome";


// function HomeScreen({navigation}) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button title="texto" 
//       onPress={()=> navigation.navigate('Details')}
//       >texto</Button>
//     </View>
//   );
// }

// function DetailsScreen({navigation}) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//     </View>
//   );
// }
import Login from './screens/Login';
import Home from './screens/Home/Home';
import NewSurvey from './screens/NewSurvey';
import Search from './screens/Search';
import SurveyPrint from './screens/SurveyPrint';





const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle:{backgroundColor: "rgba(63,81,181,1)"}, headerTintColor:"#FFF",headerLeft: null}}>

        <Stack.Screen name="Login" component={Login} 
          options={{ 
            headerShown: false,

          }}
          />
        <Stack.Screen 
        name="Home" 
        component={Home}
        options={{
          // title: "Minhas Vistorias"
          headerTitle: ("Minhas Vistorias") ,
          // headerLeft:()=>(
          //   // headerBackTitle:true

          // ),
          headerRight: () => (
            <Icon
            onPress={() => alert('This is a button!')}
            // title="<i class='fal fa-ellipsis-v'></i>"
            name="ellipsis-v" 
            style={styles.icon}
            // color="#fff"
            />
            ),
          }}
          screenOptions={{headerLeft: null}}
          
        />
        <Stack.Screen 
        name="NewSurvey" 
        component={NewSurvey}
        options={{title: "Nova Vistoria"}}  

        />
        <Stack.Screen name="Search" component={Search} 
        options={{title: "Nova Vistoria"}}  
         />
        <Stack.Screen name="SurveyPrint" component={SurveyPrint} 
        
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({

  icon: {
    color: "#fff",
    fontFamily: "Roboto",
    fontSize: 22,
    // alignSelf: "center",
    // marginLeft:12,
    marginRight:18
    // width: 24,
    // height: 24
  }
})


export default Routes;