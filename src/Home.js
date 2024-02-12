import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const Home = () => {


  const navigation = useNavigation();

    useEffect(() => {

        const unsubscribe = navigation.addListener('blur', (e) => {
          // Call your method or perform any actions before navigating away
          console.log('Before navigating away, call your method here.');
          // Uncomment the line below if you want to prevent the screen from being removed immediately
         // e.preventDefault();
        });
    
        return unsubscribe;
      }, [navigation]);
    
      const navigateToOtherScreen = () => {
        // Navigate to the other screen
        navigation.navigate('Screen1');
      };
        
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={()=>navigateToOtherScreen()}><Text style={{padding:10, color:'black', fontSize:20}}>Screen 1</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Screen2')}><Text style={{padding:10, color:'black', fontSize:20}}>Screen 2</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Screen3')}><Text style={{padding:10, color:'black', fontSize:20}}>Screen 3</Text></TouchableOpacity>
  


    </View>
  )
}

export default Home

const styles = StyleSheet.create({})