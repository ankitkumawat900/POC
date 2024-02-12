import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './src/Home'
import { Provider } from 'react-redux'
import store from './src/Redux/Store'
import {MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper'
import Navigation from './src/Navigation'
const theme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    primary:'olive',
    secondary:'yellow',
  },
};

const App = () => {
  
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
      <Navigation/>
      </PaperProvider>
    </Provider>
 
  )
}

export default App

const styles = StyleSheet.create({})