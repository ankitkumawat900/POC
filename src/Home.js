import { Alert, Button, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Home = () => {

    const [showAlert, setShowAlert] = useState(false);

    const handlePress = () => {
      setShowAlert(!showAlert);
    };

    const [isModalVisible, setModalVisible] = useState(false);

    const showCustomAlert = () => {
      setModalVisible(true);
    };

    const hideAlert = () => {
      setModalVisible(false);
    };
  

    const CustomAlert = ({ title, message, testID }) => {
        return (
          <View testID={testID}>
            {Alert.alert(title, message,[{text:"ok", onPress:()=>{handlePress()}}])}
          </View>
        );
      };

      const handleAlert = ()=>{
        Alert.alert(
            'Alert Title',
            'Alert Message',
            [
              {
                
                text: 'cancel',
                onPress: () => {
                  // Do something
                },
                testID : 'my-alert',
                accessibilityLabel:"myButton",
                accessibilityTraits:'button'
              },
              {
                
                text: 'add',
                onPress: () => {
                  // Do something
                },
                options:{
                  testID: 'my-alert',
                },
                testID : 'my-alert',
              },
            ],
            
          );
      }

  return (
    <View>
    <View>
      <Text>Home</Text>

      <Button testID='idd' accessibilityLabel="myButton" title="custm with Alert" onPress={()=>handlePress()} />

      <Button title="Alert" onPress={handleAlert}/>
      {showAlert && (
        <CustomAlert
          title="Custom Alert Title"
          message="This is a custom alert message."
          testID="custom-alert"
        />
      )}

      <TouchableOpacity testID='customBtn' onPress={()=>showCustomAlert()}>
        <Text>custom Alert</Text>
      </TouchableOpacity>

    </View>


    
       <Modal visible={isModalVisible} transparent={true} // Set to true to make the background transparent
        animationType="slide" >
        <View style={{flex:1,justifyContent:'center', marginHorizontal:80 }}>
        <View style={{justifyContent: 'center', alignItems: 'center', borderRadius:10, padding:5, elevation:10, backgroundColor:'white'  }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, }}>
            <Text style={{fontSize:18, color:'black'}}>This is a custom alert</Text>
            <TouchableOpacity  onPress={hideAlert} testID="modalOkButton">
              <Text style={{ color: 'blue', marginTop: 20, textAlign:'right' }}>OK</Text>
            </TouchableOpacity>
            {/* Additional button with testID
            <TouchableOpacity onPress={() => console.log('Custom Button Pressed')} testID="customButton">
              <Text style={{ color: 'red', marginTop: 10 }}>Custom Button</Text>
            </TouchableOpacity> */}
          </View>
        </View>
        </View>
      </Modal> 
      </View>
      
  )
}

export default Home

const styles = StyleSheet.create({})