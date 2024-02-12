import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ReactNativeBlobUtil from 'react-native-blob-util';

import NetInfo from "@react-native-community/netinfo";

import networkSpeed from 'react-native-network-speed';
import { launchImageLibrary } from 'react-native-image-picker';

const FetchBlobUse = () => {
  const [downloadSpeed, setDownloadSpeed] = useState(null);

  const [uploadSpeedTestEnable, setUploadSpeedTestEnable] = useState(true);
  const [downloadSpeedTestEnable, setdownloadSpeedTestEnable] = useState(true);

  const [videoUri, setVideoUri] = useState();

  const [networkType, setNetworkType] = useState('');

  const [downloadCurrentSpeed, setDownloadCurrentSpeed]= useState();
  const [uploadCurrentSpeed, setuploadCurrentSpeed]= useState();

  const [uploadSpeed,setUploadSpeed] = useState();

  const runSpeedTest = async () => {
    setdownloadSpeedTestEnable(false);
    console.log("start");
    const startTime = new Date().getTime();
    const testFileUrl = 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'; //  file URL

    try {
      const response = await ReactNativeBlobUtil.config({ fileCache: true }).fetch('GET', testFileUrl);
      const endTime = new Date().getTime();
      const duration = endTime - startTime;

      console.log(response);
      // Calculate download speed in Mbps
      const contentLength = response.respInfo.headers['content-length'];

      console.log(contentLength);
      // Calculate download speed in Mbps
      const fileSizeInBits = contentLength * 8;
       console.log(fileSizeInBits);
      const speed = (fileSizeInBits / (duration / 1000)) / 1000000;

      setDownloadSpeed(speed.toFixed(2));
      console.log(speed.toFixed(2));
      setdownloadSpeedTestEnable(true);
    } catch (error) {
      console.error('Error during speed test:', error);
    }finally{
      setdownloadSpeedTestEnable(true);
    }
  };
  const uploadMediaDataFromGallery = async () => {
    setUploadSpeedTestEnable(false);
    const result = await launchImageLibrary({mediaType: 'video'});
    console.log('image picker result ====>', result);

    console.log(result.assets[0].uri);
    setVideoUri(result.assets[0].uri);
    console.log("ankit",result.assets[0].fileSize);

    console.log('start');
    const startTime = new Date();
    console.log(startTime);
   
    const accessToken =
      'sl.BvCrlW5xdpFeTUrD3N8ZEljqYwJltc_Ol2ohbZc52uEGbccDcZkQ5hFxtEmqtzmVZV2G9Out6InGUIf1R83wWYZNBD636NC67VtBET8KOfZc6Ge8SLQaXxPuzduNschMJ0l-YmjsAD5pVMdsFuCB';
    try {
      const response = await ReactNativeBlobUtil.fetch(
        'POST',
        'https://content.dropboxapi.com/2/files/upload',
        {
          Authorization: `Bearer ${accessToken}`,
          'Dropbox-API-Arg': JSON.stringify({
            path: '/videoMedia.mp4', // Destination path in Dropbox
            mode: 'add',
            autorename: true,
            mute: false,
          }),
          'Content-Type': 'application/octet-stream',
        },
        ReactNativeBlobUtil.wrap(result.assets[0].uri),
      ).uploadProgress((written, total) => {
          console.log('uploaded', written / total);
        }).progress((received, total) => {
          console.log('progress', received / total);
        }).then(res => {
          console.log(res.text());
          console.log(new Date());
          const endTime = new Date().getTime();
          const duration = endTime - startTime;

          const fileSizeInBits = (result.assets[0].fileSize) * 8;
          console.log(fileSizeInBits);
          const speed = (fileSizeInBits / (duration / 1000)) / 1000000;
          console.log(speed)
          setUploadSpeed(speed.toFixed(2));
          setUploadSpeedTestEnable(true);
          console.log('Video uploaded Successfully');
          ToastAndroid.show('video Uploaded Succesfully !', ToastAndroid.SHORT);
        }) // listen to upload progress event

        .catch(err => {
          // error handling ..
        });

      //console.log(response);
    } catch (error) {
      console.error('Error during upload :', error);
    }finally{
      setUploadSpeedTestEnable(true);
    }
  };

  useEffect(()=>{
    NetInfo.fetch().then(state => {
    console.log("Connection type", state.type);
    setNetworkType(state.type);
    console.log("Is connected?", state.isConnected);
  });
  })

  useEffect(() => {
    // Start listening to network speed changes when the component mounts
    const listner =  networkSpeed.startListenNetworkSpeed(({ downLoadSpeed, downLoadSpeedCurrent, upLoadSpeed, upLoadSpeedCurrent }) => {
      console.log("Download speed -", downLoadSpeed + 'kb/s');
      setDownloadCurrentSpeed(downLoadSpeed);

      console.log("Download current speed -", downLoadSpeedCurrent + 'kb/s');
      console.log("Upload speed -", upLoadSpeed + 'kb/s');
      setuploadCurrentSpeed(upLoadSpeed);
      console.log("Upload current speed -", upLoadSpeedCurrent + 'kb/s');
    });

    // //Cleanup function to stop listening when the component unmounts
    // return () => {
    //     listner.unsubscribe(); // Call the function returned by startListenNetworkSpeed to stop listening
    // };
  }, []);

  return (
    <View style={styles.continer}>
     { downloadSpeedTestEnable ? <TouchableOpacity style={{backgroundColor:'red', padding:10, borderRadius:8  }} onPress={runSpeedTest}>
        <Text style={[styles.txt, ,{color:'white'}]}>Run download Speed Test</Text>
      </TouchableOpacity>:<TouchableOpacity style={{backgroundColor:'#eb2c2cb0', padding:10, borderRadius:8  }}>
        <Text style={[styles.txt, ,{color:'white'}]}>loading....</Text>
      </TouchableOpacity>}
     

      {uploadSpeedTestEnable?<TouchableOpacity style={{backgroundColor:'red', padding:10, borderRadius:8, marginTop:5  }} onPress={uploadMediaDataFromGallery}>
        <Text style={[styles.txt, ,{color:'white'}]}>Upload Speed Test</Text>
      </TouchableOpacity>:<TouchableOpacity style={{backgroundColor:'#eb2c2cb0', padding:10, borderRadius:8, marginTop:5  }}>
        <Text style={[styles.txt, ,{color:'white'}]}>loading....</Text>
      </TouchableOpacity>}

      {downloadSpeed !== null ? (
        <Text style={styles.txt}>Download Speed: {downloadSpeed} Mbps</Text>
        ): (<Text style={styles.txt}>Download Speed:- ....</Text>)}
        {uploadSpeed !== null ? (
        <Text style={styles.txt}>upload Speed: {uploadSpeed} Mbps</Text>
        ): (<Text style={styles.txt}>upload Speed:- ....</Text>)}
        
      <Text style={styles.txt}>Network Type: {networkType}</Text>
      <Text style={styles.txt}>when download currnt speed of network--- {downloadCurrentSpeed} kb/s</Text>
      <Text style={styles.txt}>when upload currnt speed of network--- {uploadCurrentSpeed} kb/s</Text>
    </View>
  );
};

export default FetchBlobUse;

const styles = StyleSheet.create({
    continer:{
        margin:10,
        
    },
    txt:{
        fontSize:16, color:'black'
    }
});
