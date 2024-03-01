import {
  Button,
  Image,
  Linking,
  Modal,
  PermissionsAndroid,
  SafeAreaView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  Camera,
  useCameraDevice,
  useCameraDevices,
  useCameraPermission,
} from 'react-native-vision-camera';

import {
  check,
  openSettings,
  PERMISSIONS,
  RESULTS,
} from 'react-native-permissions';

import {request} from 'react-native-permissions';
import {checkCameraPermissions} from './Permission';
import {gravity} from 'react-native-sensors';
import useDeviceRotation, {useDeviceRotationSensor} from './useDeviceRotation';

import Icon from 'react-native-vector-icons/MaterialIcons';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const Cam = () => {
  const device = useCameraDevice('back');
  const [mode, setMode] = useState('photo');

  const [permission, setPermission] = useState(false);
  //const devices = useCameraDevices();


  // const device = devices.back;
  const [permissionGranted, setPermissionGranted] = useState(false);

  const {userDenied, setUSerDenied} = useState(false);

  const [isModalVisible, setIsModelVisible] = useState(false);

  const [hasCameraPermission, setHasCameraPermission] = useState(null);

  const [permissionStatus, setPermissionStatus] = useState();

  const [modalVisible, setModalVisible] = useState(false);

  const [photoUri, setPhotoUri] = useState();

  const [isFleshOn, setIsFleshOn] = useState('off');

  const [deviceHasFlash, setdeviceHasFlash] = useState(false);

  const [oriantaion, setOriantaion] = useState('portrait');

  const [isphoto, setIsphoto] = useState(true);

  const [isOnRecording,setonRecodring] = useState(false);

  const [starttime,setStartTimer] = useState(0);

  const [intervalId, setIntervalId] = useState(null);


  useEffect(() => {
    console.log('mode', mode);
    
  }, [mode]);

  useEffect(() => {
    console.log('flash', isFleshOn);
    
  }, [isFleshOn]);

  const camera = useRef(Camera);

  useEffect(() => {
    console.log('orientation', oriantaion);
  }, [oriantaion]);

  useEffect(() => {
    checkCameraPermison();

    const subscription = gravity.subscribe(({x, y}) => {
      const radian = Math.atan2(y, x);
      const degree = (radian * 180) / Math.PI;
      // console.log("degree", degree);
      let rotation = useDeviceRotationSensor(degree);

      //console.log('roataton', rotation);
      // console.log("rotation",rotation);
      setOriantaion(rotation);
    });
    return () => {
      setTimeout(() => {
        subscription.unsubscribe();
      }, 300);
    };
  }, []);

  const abc = async () => {
    const devices1 = await Camera.getAvailableCameraDevices();
    console.log('devices camera', devices1);
   let a =  await devices1[0].hasFlash;
   console.log("a",a)
    setdeviceHasFlash(a);
  };

  useEffect(() => {
    abc();
  }, []);

  const checkCameraPermison = async () => {
    try {
      let campermission = await checkCameraPermissions();
      console.log('camera', campermission);
      setPermission(true);
    } catch (err) {
      setPermission(true);
      console.log(err);
    }
  };

  const requestPermission = async () => {
    let cameraPermission = await Camera.requestCameraPermission();
    setPermissionStatus(cameraPermission);
    console.log('my camera Permission', cameraPermission);
  };

  //const { hasPermission, requestPermission } = useCameraPermission()

  // const a = () => {
  //   request(PERMISSIONS.ANDROID.CAMERA).then(result => {
  //     // …
  //     console.log(result);
  //   });
  // };

  const requestCameraPermission = async () => {
    try {
      const result = await request(PERMISSIONS.ANDROID.CAMERA);

      switch (result) {
        case RESULTS.UNAVAILABLE:
          console.log(
            'This feature is not available (on this device / in this context)',
          );
          break;
        case RESULTS.DENIED:
          console.log(
            'The permission has not been requested / is denied but requestable',
          );
          // Check if you should show rationale before requesting the permission again

          break;
        case RESULTS.LIMITED:
          console.log('The permission is limited: some actions are possible');
          break;
        case RESULTS.GRANTED:
          console.log('The permission is granted');
          setPermissionGranted(true);
          break;
        case RESULTS.BLOCKED:
          console.log('The permission is denied and not requestable anymore');
          promptToOpenSettings(); // Prompt the user to open settings
          break;
      }
    } catch (error) {
      console.error('Error requesting camera permission:', error);
    }
  };

  const promptToOpenSettings = () => {
    // Prompt the user to open the app settings
    // openSettings();
    setIsModelVisible(true);
  };

  // const t = async () => {
  //   try {
  //     console.log('a');
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.CAMERA,
  //     );
  //     console.log(granted);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  //  useEffect(() => {
  //   requestCameraPermission();
  // }, []);

  const direct = () => {
    //Linking.openURL('app-settings:')
    Linking.openSettings();
  };

  const setFlesh = () => {
    if (isFleshOn == 'off') {
      setIsFleshOn('on');
    } else {
      setIsFleshOn('off');
    }
  };

  useEffect(() => {
    console.log(starttime);
  },[starttime])


  // const startTimer  = (val) =>{
    
  //   const  interval = setInterval(() => {
  //     setStartTimer(prevSeconds => prevSeconds + 1);
  //   }, 1000);

  //   if(val === 'stop'){
  //     console.log("clear")
  //     setStartTimer(0); // Reset timer
  //   clearInterval(interval);
  //   }
  // }

  const startTimer = (val) => {
    if (val === 'start' && intervalId === null) {
      const id = setInterval(() => {
        setStartTimer(prevSeconds => prevSeconds + 1);
      }, 1000);
      setIntervalId(id);
    } else if (val === 'stop' && intervalId !== null) {
      clearInterval(intervalId);
      setIntervalId(null);
      setStartTimer(0);
    }
  };


  const stopTimer = ()=>{
    clearInterval(interval);
  }

  const onClickCamera = async () => {
    console.log('flesh value', isFleshOn);
    try {
      if (mode === 'photo') {
        const photo = await camera.current.takePhoto({
          flash: isFleshOn,
          oriantaion: oriantaion,
          
        });

        photo['uri'] = 'file://' + photo.path;
        setPhotoUri(photo['uri']);

        console.log('file path', photo['uri']);
        ToastAndroid.show('photo clicked!', ToastAndroid.SHORT);
        // savePictureToGallery(photo.path);
        //   compressSave(photo.uri, "image");
      } else {
        setonRecodring(true);
        
        startTimer("start");
        console.log("recording started");
        await camera.current.startRecording({
          flash: isFleshOn,
          fileType: 'mp4',
          onRecordingFinished: video => {
           // setonRecodring(false);
            // savePictureToGallery(video.path);
            // compressSave(video.path, "video");
            console.log("recording is completed ",video);
            ToastAndroid.show('Video recording successfully completed!', ToastAndroid.SHORT);
          },
          onRecordingError: error => {
            setonRecodring(false);
            console.error('RecordingError ===>', error);
          },
        });
      }
    } catch (err) {
      // setonRecodring(false);
      console.log(err);
    }
  };

  const stopRecording = async () => {
    try {
      startTimer("stop");
     // stopTimer();
      await camera.current.stopRecording();
      setonRecodring(false);
    } catch (err) {
      console.log("error ", err);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, }}>
      <View style={{flex: 1, justifyContent: 'center',  }}>
        <View style={{flex: 1}}>
          {permission && device != null ? (
            <Camera
              ref={camera}
              style={StyleSheet.absoluteFill}
              device={device}
              photo={true}
              video={true}
              audio={true}
              isActive={true}
              orientation={oriantaion}
            />
          ) : (
            <Text>No camera</Text>
          )}
        </View>
       
      <View>
       <View style={{justifyContent:'center', alignItems:'center', backgroundColor:'white'}}>{isOnRecording&&<Text style={{}}>{starttime} sec</Text>}</View>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignItems:'center', backgroundColor:'white'}}>
          <TouchableOpacity
              style={{padding: 10, alignItems: 'center',justifyContent:'center' , marginTop:10, }}
              onPress={() => {
                if(isphoto){  
              setMode("video")
            }else{
              setMode("photo")
            }
              setIsphoto(!isphoto)}
              }>
              {/* <Text style={{fontSize: 17, color: 'black'}}>{mode}</Text> */}

            {!isphoto?<FontAwesomeIcon name="camera" size={25} color="#000000" />:<FontAwesomeIcon name="video-camera" size={25} color="#000000" />}
            </TouchableOpacity>
            <TouchableOpacity
              style={{padding:12,alignItems: 'center', marginTop:8, borderWidth:3.5, borderColor: 'black', borderRadius:60}}
              onPress={() => {
                if(isOnRecording){
                  stopRecording()
                }else{
                   onClickCamera()
                }
              }}>
              {/* <Text style={{fontSize: 17, color: 'black'}}>Click photo</Text> */}
             {/* <Icon name="camera-alt" size={55} color="#000000" /> */}
             {/* <FontAwesomeIcon name="camera" size={35} color="#000000" /> */}
             {isphoto?<FontAwesomeIcon name="camera" size={32} color="#000000" />:!isOnRecording?<FontAwesomeIcon name="video-camera" size={32} color="#000000" />:<View style={{paddingHorizontal:3}}><FontAwesomeIcon name="circle" size={32} color="red" /></View>}
           
            </TouchableOpacity>
            {/* <TouchableOpacity
              style={{padding: 10, alignItems: 'center', borderWidth:1, borderColor: 'black', marginTop:10, marginLeft:10}}
              onPress={() => stopRecording()}>
              <Text style={{fontSize: 17, color: 'black'}}>stop recording</Text>
            </TouchableOpacity> */}
            {deviceHasFlash && <TouchableOpacity
              style={{padding: 10, alignItems: 'center',justifyContent:'center', marginTop:10,}}
              onPress={() => setFlesh()}>
              {/* <Text style={{fontSize: 17, color: 'black'}}>
                flash is {isFleshOn}
              </Text> */}
           {isFleshOn == "on"?<Icon name="flash-on" size={30} color="#000000" />: <Icon name="flash-off" size={30} color="#000000" />}
            </TouchableOpacity>}
          </View>
          <TouchableOpacity
            onPress={() => setModalVisible(!modalVisible)}
            style={{padding: 10, alignItems: 'center', backgroundColor:'white'}}>
            <Text style={{fontSize: 17, color: 'black'}}>View Image</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            onPress={() => requestPermission()}
            style={{
              backgroundColor: 'gray',
              padding: 10,
              alignItems: 'center',
            }}>
            <Text style={{color: 'white'}}>request camera permission</Text>
          </TouchableOpacity> */}
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <SafeAreaView style={{flex: 1}}> 
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text>This is a last edited image!</Text>
              <Image
                source={{
                  uri: photoUri,
                }}
                style={{width: 'auto', height: 500, resizeMode: 'contain'}}
              />
              <Text></Text>

              <Button title="Close" onPress={() => setModalVisible(false)} />
            </View>
          </View>
          </SafeAreaView>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default Cam;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
  },
  modalContent: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
    borderRadius: 4,
    elevation: 5, // for Android shadow
  },
});
