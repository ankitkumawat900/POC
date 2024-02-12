import {
  Linking,
  Modal,
  PermissionsAndroid,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';

import {
  check,
  openSettings,
  PERMISSIONS,
  RESULTS,
} from 'react-native-permissions';
import {request} from 'react-native-permissions';

const Cam = () => {
  const device = useCameraDevice('back');
  const [permissionGranted, setPermissionGranted] = useState(false);

  const {userDenied, setUSerDenied} = useState(false);

  const [isModalVisible, setIsModelVisible] = useState(false);

  const [hasCameraPermission, setHasCameraPermission] = useState(null);


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

  return (
    <View style={{flex: 1}}>
      {permissionGranted && (
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
        />
      )}

      <TouchableOpacity
        onPress={() => requestCameraPermission()}
        style={{backgroundColor: 'gray', padding: 10, alignItems: 'center'}}>
        <Text style={{color: 'white'}}>Open Camera</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => direct()}
        style={{backgroundColor: 'gray', padding: 10, alignItems: 'center'}}>
        <Text style={{color: 'white'}}>Open Setting</Text>
      </TouchableOpacity>

      <Modal
        visible={isModalVisible}
        transparent={true} // Set true to make the background transparent
        animationType="slide">
        <View style={{flex: 1, justifyContent: 'center', marginHorizontal: 80}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              padding: 4,
              elevation: 6,
              backgroundColor: 'white',
            }}>
            <View
              style={{backgroundColor: 'white', padding: 20, borderRadius: 10}}>
              <Text style={{fontSize: 18, color: 'black'}}>
                Open App setting to do it manually
              </Text>

              <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <TouchableOpacity
                style={{marginRight:15}}
                  onPress={() => {
                    
                    setIsModelVisible(false); // handle model visiblility 
                  }}
                  >
                  <Text
                    style={{color: 'blue', marginTop: 20, textAlign: 'right'}}>
                   Cancel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    openSettings();
                    setIsModelVisible(false);
                  }}
                  >
                  <Text
                    style={{color: 'blue', marginTop: 20, textAlign: 'right'}}>
                    Go to Settings
                  </Text>
                </TouchableOpacity>
              </View>
              
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Cam;

const styles = StyleSheet.create({});
