import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from "@react-navigation/native"
import Home from './src/screens/Home'
//import More from './src/screens/More'


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
     screenOptions={
      {
        headerShown:false
      }
     } >
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        {/* <Stack.Screen name="More" component={More}></Stack.Screen> */}
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default App

const styles = StyleSheet.create({})