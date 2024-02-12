import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [inputBoxValue, setInputBoxValue] = useState('');

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.bodyText}>Text Box</Text>
      <View style={styles.box}> 
      <TextInput
        style={styles.textBox}
        value={inputBoxValue}
        onChangeText={(t)=>{setInputBoxValue(t)}}
        placeholder="Type something..."
      />
    </View>
    </View>
    )
}

export default Home

const styles = StyleSheet.create({
  mainContainer:{
    margin:12
  },
  box:{
   backgroundColor:'white',
    borderRadius:24,
    elevation:4,
  },
  textBox:{
    fontSize:18,
    padding:12,
    color:'black'
  },
  bodyText:{
    fontSize:18,
    color:'black',
    marginBottom:4,
  }
})