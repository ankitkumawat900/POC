import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Questions from './Components/Questions'
import { useNavigation } from '@react-navigation/native'

const Screen2 = () => {

  const navigation = useNavigation();
  const data = [
    {key: '1', title: 'How can I update npm on Windows?', body:'The question is specifically asking how to upgrade npm, not Node.js. If you want to update Node.js over a CLI on windows'},
    {key: '2', title: 'How can I update npm on Windows?', body:'The question is specifically asking how to upgrade npm, not Node.js. If you want to update Node.js over a CLI on windows'},
    {key: '3', title: 'How can I update npm on Windows?', body:'The question is specifically asking how to upgrade npm, not Node.js. If you want to update Node.js over a CLI on windows'},
    // Add more items...
  ];
  return (
    
    <FlatList
    data={data}
  renderItem={({item})=>
  <TouchableOpacity onPress={(item)=>navigation.navigate('OpenQuestion')}>
  <Questions title={item.title} body={item.body}></Questions>
  </TouchableOpacity>
}
    keyExtractor={(item) => item.key}
  />
  )
}

export default Screen2

const styles = StyleSheet.create({})