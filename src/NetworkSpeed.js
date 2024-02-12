import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import NetInfo, { addEventListener } from "@react-native-community/netinfo";
import { useNetInfoInstance } from "@react-native-community/netinfo";
import networkSpeed from 'react-native-network-speed';
import { fetch } from "@react-native-community/netinfo";

const NetworkSpeed = () => {
    const [downloadSpeed, setDownloadSpeed] = useState(null);
  const [uploadSpeed, setUploadSpeed] = useState(null);


//     useEffect(()=>{
// //         NetInfo.fetch().then(state => {
// //             const speed = state.details.speed;
// //             console.log(state);
// //             console.log('Network Speed', `${speed} Mbps`);
// //           });
// //           // Subscribe
// // const unsubscribe = addEventListener(state => {
// //     console.log("Connection type", state.type);
// //     console.log("Is connected?", state.isConnected);
// //   });
//   //runSpeedTest()
// //   networkSpeed.startListenNetworkSpeed(({downLoadSpeed,downLoadSpeedCurrent,upLoadSpeed,upLoadSpeedCurrent}) => {
// //     console.log("download speed-",downLoadSpeed + 'kb/s') // download speed for the entire device 整个设备的下载速度
// //     console.log("download current speed-",downLoadSpeedCurrent + 'kb/s') // download speed for the current app 当前app的下载速度(currently can only be used on Android)
// //     console.log("upload speed-",upLoadSpeed + 'kb/s') // upload speed for the entire device 整个设备的上传速度
// //     console.log("upload current speed-",upLoadSpeedCurrent + 'kb/s') // upload speed for the current app 当前app的上传速度(currently can only be used on Android)
// // })
//     })
    


    // const runSpeedTest = async () => {
    //     try {
    //       const response = await fetch('https://fast.com/download');
    //       //const speedData = await response.json();
    //       setDownloadSpeed(response);
    //     } catch (error) {
    //       console.error('Error during speed test:', error);
    //     }
    //   };
    
// start


// stop

const runSpeedTest = async () => {
    const connectionInfo = await NetInfo.fetch();
    

    // You can use connectionInfo and ipAddress to estimate the network speed
    console.log('Connection Type:', connectionInfo.type);
   

    // Estimate download speed
    const downloadStartTime = new Date().getTime();
    // Simulate downloading a small amount of data (adjust size as needed)
    await fetch('https://www.google.com/', { method: 'GET' });
    const downloadEndTime = new Date().getTime();
    const downloadDuration = downloadEndTime - downloadStartTime;
    const downloadSpeed = 1 / (downloadDuration / 1000); // Speed in bytes per second

    // Estimate upload speed
    const uploadStartTime = new Date().getTime();
    // Simulate uploading a small amount of data (adjust size as needed)
    await fetch('https://reqres.in/api/users', { method: 'POST', body: {"name": "morpheus","job": "leader"} });
    const uploadEndTime = new Date().getTime();
    const uploadDuration = uploadEndTime - uploadStartTime;
    const uploadSpeed = 1 / (uploadDuration / 1000); // Speed in bytes per second

    // Update the state with the estimated speeds
    setDownloadSpeed(downloadSpeed.toFixed(2));
    setUploadSpeed(uploadSpeed.toFixed(2));
  };

  

useEffect(()=>{
  NetInfo.fetch().then(state => {
  console.log("Connection type", state.type);
  console.log("Is connected?", state.isConnected);
});

},[])
  return (
    <View>
      <Text>NetworkSpeed</Text>

      <TouchableOpacity onPress={runSpeedTest}>
        <Text>Run Speed Test</Text>
      </TouchableOpacity>

      {downloadSpeed !== null && (
        <Text>Estimated Download Speed: {downloadSpeed} bytes/second</Text>
      )}

      {uploadSpeed !== null && (
        <Text>Estimated Upload Speed: {uploadSpeed} bytes/second</Text>
      )}


     
    </View>
  )
}

export default NetworkSpeed

const styles = StyleSheet.create({})