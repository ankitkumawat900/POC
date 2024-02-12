import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import store from './Redux/Store';
import {
  addPost,
  addUser,
  getUserList,
  removeUser,
  setCheckData,
} from './Redux/Actions';

import Icon from 'react-native-vector-icons/MaterialIcons';
import CheckBox from './Components/CheckBox';

import {Checkbox as PaperCheckbox} from 'react-native-paper';
import Navigation from './Navigation';
import { useNavigation } from '@react-navigation/native';

const Info = () => {
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState(false);
  const checkBoxData = [
    {id: 1, isChecked: false, text: 'check1'},
    {id: 2, isChecked: false, text: 'check2'},
    {id: 3, isChecked: false, text: 'check3'},
    {id: 4, isChecked: false, text: 'check4'},
    {id: 5, isChecked: false, text: 'check5'},
    {id: 6, isChecked: false, text: 'check6'},
    {id: 7, isChecked: false, text: 'check7'},
  ];
  // const setData = () => {
  //   dispatch(addUser({id: 1, name: 'Ankit'}));
  // };

  // const deleteUser = () => {
  //   dispatch(removeUser({id: 1, name: 'Ankit'}));
  // };

  // const addNewPost = () => {
  //   dispatch(
  //     addPost({key: 'sdfsdf', title: 'srfsdfsd', des: 'edhfh sdjshdhkj '}),
  //   );
  // };

  // useEffect(()=>{
  //  handleAPI();
  // },[])

  // useEffect(()=>{
  //   dispatch(setCheckData(isChecked));
  //  },[isChecked])

  // useEffect(()=>{
  //   setData();
  // },[]);

  // console.log(store.getState());

  // const data = useSelector(state => state.reducer);
  // console.log(data);

  const postData = useSelector(state => state.postReducer);
  console.log('data', postData);

  const handleCheckboxToggle = (id, isChecked) => {
    dispatch(setCheckData({id, isChecked: isChecked}));

    console.log('check button clicked', isChecked);
  };

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };


  



  const renderItem = ({item}) => {
   // console.log(item);
    return (
      <CheckBox
        id={item.id}
        label={item.text}
        onToggle={handleCheckboxToggle}
      />
    );
  };
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.txt}>Info Screen</Text>

      <FlatList
        data={checkBoxData}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      
  
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  mainContainer: {
    margin: 8,
  },
  txt: {
    fontSize: 18,
    color: 'black',
  },
});
