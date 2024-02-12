import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Video} from 'react-native-compressor';

import RNFS from 'react-native-fs';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Video1 from 'react-native-video';

// I tasted with  -  21MB compressed to 8MB
//                          45 MB -> 17MB
//                          102MB -> 39MB

const Home = () => {
  const [videoPath, setVideoPath] = useState();
  const [compressedVideoPath, setCompressedVideoPath] = useState();
  const [count , setCount] = useState(0);

  const pickVid = async () => {
    
    // You can also use as a promise without 'callback':
    const result = await launchImageLibrary({mediaType: 'video'});
    console.log('image picker result ====>', result);
    getVideoSize(result.assets[0].uri);
    setVideoPath(result.assets[0].uri);
    setCompressedVideoPath(result.assets[0].uri);
   // compressVideo(result.assets[0].uri);
  };

  // const compressVideo = async videoUri => {
  //   console.log("ankit",videoUri);
  //   const intervalId = setInterval(() => {
  //     console.log(count);
  //     setCount(prevCount => prevCount + 1);
  //   }, 1000);
  //   const result = await Video.compress(
  //     videoUri,
  //     {
  //       compressionMethod:'auto',
  //       progressDivider: 10,
  //       downloadProgress: progress => {
  //         console.log('downloadProgress: ', progress);
          
  //       },
  //      // maxSize:550, //default 660
  //      // bitrate:10000
  //     },
      
  //     progress => {
  //       console.log('Compression Progress: ', progress);
  //       const intervalId = setInterval(() => {
  //         console.log(count);
  //         setCount(count+1);
  //       }, 1000);
  //       clearInterval(intervalId);
  //     },
      
  //   );
    
  //   console.log('compressed path',result);
  //   setCompressedVideoPath(result);
  //   getVideoSize(result);
  // };

  const compressVideo = async videoUri => {
    console.log("ankit", videoUri);
    let t = 0;
    const intervalId = setInterval(() => {
      //console.log(count);
      t+=1;
     // console.log('time',t);
      setCount(prevCount => prevCount + 1);
    }, 1000);
    
    try {
     console.log("start date and time", new Date());
      const result = await Video.compress(
        videoUri,
        {
          compressionMethod: 'manual',
          progressDivider: 10,
          downloadProgress: progress => {
            console.log('downloadProgress: ', progress);
          },
          // maxSize: 550, // default 660
          // bitrate: 10000
          
        },
        progress => {
          console.log('Compression Progress: ', progress);
        },
      );
      console.log('end date and time',new Date())
      console.log('compressed path', result);
      setCompressedVideoPath(result);
      getVideoSize(result);
    } catch (error) {
      console.error('Error compressing video:', error);
    } finally {
      // Clear the interval when compression is completed (or fails)
      clearInterval(intervalId);
    }
};
  

  const getVideoSize = async videoPath => {
    try {
      console.log('video path : ', videoPath);
      // Check if the file exists
      const fileExists = await RNFS.exists(videoPath);

      if (!fileExists) {
        console.log('File not found');
        return null;
      }

      // Get the file information, including size
      const fileInfo = await RNFS.stat(videoPath);

      // Extract the size property
      const videoSizeInBytes = fileInfo.size;

      // Convert bytes to kilobytes or megabytes as needed
      const videoSizeInKb = videoSizeInBytes / 1024;
      const videoSizeInMb = videoSizeInKb / 1024;

      console.log(
        `Video size: ${videoSizeInBytes} bytes, ${videoSizeInKb} KB, ${videoSizeInMb} MB`,
      );

      return {
        bytes: videoSizeInBytes,
        kilobytes: videoSizeInKb,
        megabytes: videoSizeInMb,
      };
    } catch (error) {
      console.error('Error getting video size:', error);
      return null;
    }
  };


  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity
        style={{padding: 10, alignItems: 'center', backgroundColor: 'blue'}}
        onPress={() => pickVid()}>
        <Text style={{color: 'white', fontSize: 16}}>
          Select Video
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{padding: 10, marginTop:10, alignItems: 'center', backgroundColor: 'blue'}}
        onPress={() => compressVideo(videoPath)}>
        <Text style={{color: 'white', fontSize: 16}}>
          Compress Video
        </Text>
      </TouchableOpacity>
      {/* 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' */}
    

      <View style={{width:'auto', height:400, borderWidth:1, borderColor:'black', margin:10}}>
      {compressedVideoPath ?<Video1
        source={{
          uri: compressedVideoPath,
        }} // Can be a URL or a local file.
        ref={ref => {
          this.player = ref;
        }}
        style={styles.backgroundVideo}
        onError={(error) => console.error('Video Player Error:', error)}
        // Store reference
        // Callback when video cannot be loaded
      />:<View><Text style={{fontSize:20}}>No Video selected</Text></View>}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 10,
    left: 10,
    bottom: 10,
    right: 10,
    height:200,
    width:900,
  },
  
});
