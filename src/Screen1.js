import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { resetState, setCheckData, setUserData } from './Redux/Actions';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Screen1 = () => {
  
  const dispatch = useDispatch();
  const postData = useSelector(state => state);
  const handlebtn = () => {
    dispatch(setCheckData({id:1, isChecked: true}));
    dispatch(setUserData({uid:'1',name:'xyz'}));
  };

  const resetReducer = () => {
    dispatch(resetState());
  };

  const getData = ()=>{
    console.log('data', postData);
  }

  const setDataToStorage = async()=>{
    try {
      await AsyncStorage.setItem('my-key', 'this is data');
      console.log('data set success')
    } catch (e) {
      // saving error
    }
  }
  const getDataOfStorage = async()=>{
    try {
      const value = await AsyncStorage.getItem('my-key');
      if (value !== null) {
        console.log(value);
      }else{
        console.log('data clear')
      }
    } catch (e) {
      // error reading value
    }
  }
  const clearStorge = async()=>{
    try {
      await AsyncStorage.clear();
      console.log('AsyncStorage cleared successfully.');
    } catch (error) {
      console.error('Error clearing AsyncStorage:', error);
    }
  }
  
  return (
    <View>
      <Text>Screen1</Text>
      <TouchableOpacity onPress={()=>handlebtn()} style={styles.btn}><Text style={styles.txt}>set Data Redux</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>getData()} style={styles.btn}><Text style={styles.txt}>Get Data Redux</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>resetReducer()}style={styles.btn}><Text style={styles.txt}>Clear Redux</Text></TouchableOpacity>

      <TouchableOpacity onPress={()=>setDataToStorage()}style={styles.btn1}><Text style={styles.txt}>set Store data</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>getDataOfStorage()}style={styles.btn1}><Text style={styles.txt}>get store data</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>clearStorge()}style={styles.btn1}><Text style={styles.txt}>Clear store</Text></TouchableOpacity>
  
    </View>
  )
}

export default Screen1

const styles = StyleSheet.create({
  btn:{
    backgroundColor:'blue',
    padding:10,
    borderRadius:8,
    margin:8 
   },
btn1:{
  backgroundColor:'green',
  padding:10,
  borderRadius:8,
margin:8  },
    txt:{
      color:'white',
      fontSize:16
    }
})