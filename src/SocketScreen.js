
import React from 'react'

import { Text, View, StyleSheet, TextInput, Button, ScrollView, FlatList } from 'react-native';

const SocketScreen = () => {

  const [serverState, setServerState] = React.useState('Loading...');
  const [messageText, setMessageText] = React.useState('');
 const [serverMessages, setServerMessages] = React.useState([]);
 const serverMessagesList = [];
  const wst = new WebSocket('ws://192.168.0.102:8080/');

 // console.log(wst);
  React.useEffect(() => {
   
    wst.onopen = (e) => {
      setServerState('Connected to the server')
     // console.log(e.message);
    };
    wst.onclose = (e) => {
      setServerState('Disconnected. Check internet or server.')

    };
    wst.onerror = (e) => {
      setServerState(e.message);
    };
    wst.onmessage = (e) => {
      console.log('serverdata---->',e.data);
      console.log("sever messege list->",serverMessagesList);
      serverMessagesList.push(e.data);
      console.log("data->",e.data);
      console.log("sever messege list after push->",serverMessagesList);
      setServerMessages([...serverMessagesList])
    };
  }, [])
  const submitMessage = () => {
    wst.send(messageText);
    setMessageText('')
  }

  return (
      <View style={styles.container}>
      <View style={{
        height: 40,
        backgroundColor: 'green',
        padding: 5,
        justifyContent:'center'
      }}>
        <Text style={{fontSize:16, color:'white' }}>{serverState}</Text>
      </View>
      <View style={{
        backgroundColor: '#DAA06D',
        padding: 5,
        flexGrow:1
      }}>
      
        <FlatList
        data={serverMessages}
        renderItem={({key,item})=>(
           <View style={{backgroundColor:'black', margin:2, alignSelf:'flex-start', borderRadius:5, }}><Text style={{fontSize:16, color:'white', padding:4, paddingHorizontal:5,}}>{item}</Text></View> 
              )}
        >
        </FlatList>
      </View>
      <View style={{
        flexDirection: 'column',
        
      }}>
        <TextInput style={{
            borderWidth: 1,
            borderColor: 'black',
            padding: 5,
          }} 
          placeholder={'Add text'} 
          onChangeText={text => {
            setMessageText(text)
          }}
          value={messageText}
         />
         
        <Button
        
         onPress={submitMessage}
         title={'Submit'} 
        />
        
      </View>

    </View>
  )
}

export default SocketScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        paddingTop: 30,
    
      },
})