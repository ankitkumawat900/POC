import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../Home'
import Info from '../Info'
import Screen1 from '../Screen1'
import Screen2 from '../Screen2'
import Screen3 from '../Screen3'
import OpenQuestion from '../OpenQuestion'

const Navigation = () => {

  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      {/* <Stack.Screen name="Home" component={Home} /> */}
      <Stack.Screen name="Info" component={Info}/>
      <Stack.Screen name="Screen1" component={Screen1}/>
      <Stack.Screen name="Screen2" component={Screen2}/>
      <Stack.Screen name="Screen3" component={Screen3}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})
