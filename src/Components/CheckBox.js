import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';


import Icon from 'react-native-vector-icons/MaterialIcons';
import { setCheckData } from '../Redux/Actions';


const CheckBox = ({id, label , onToggle}) => {

  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();

  const handleToggle = () => {
    setIsChecked(!isChecked);
    console.log('clicked');
    dispatch(setCheckData({id:id, isChecked: !isChecked}));
    //onToggle(id,!isChecked);
  };

  return(
    <TouchableOpacity onPress={handleToggle}>
    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
      {isChecked ?
        <Icon name={'check-box'} color={'darkblue'} size={30}></Icon>:
        <Icon name={'check-box-outline-blank'} color={'darkblue'} size={30}></Icon>
      }
      <Text style={styles.txt}>{label}</Text>
    </View>
  </TouchableOpacity>
  );
};

export default CheckBox;
const styles = StyleSheet.create({
    mainContainer:{
      margin:8
    },
    txt:{
      fontSize:18,
      color:'darkblue'
    }
  })