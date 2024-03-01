import { PermissionsAndroid } from "react-native";
import { Camera } from "react-native-vision-camera";
import DeviceInfo from "react-native-device-info";

/**
 * checkCameraPermissions(): Check for the camera permission status
 * @returns
 */
const checkCameraPermissions = async () => {
  return new Promise(async (resolve, reject) => {
    let cameraPermission = await Camera.getCameraPermissionStatus();
    let microphonePermission = await Camera.getMicrophonePermissionStatus();
    if (cameraPermission != "authorized") {
      cameraPermission = await Camera.requestCameraPermission();
    }
    if (microphonePermission != "authorized") {
      microphonePermission = await Camera.requestMicrophonePermission();
    }
    DeviceInfo.isCameraPresent()
    .then((isCameraPresent) => {
      console.log("is camera present",isCameraPresent);
    })
    .catch((cameraAccessException) => {
      // is thrown if a camera device could not be queried or opened by the CameraManager on Android
    });
    cameraPermission === "denied"
      ? reject("denied")
      : resolve(cameraPermission);

    microphonePermission === "denied"
      ? reject("denied")
      : resolve(microphonePermission);
  });
};

/**
 * checkAndroidStoragePermission(): Check for storage permission on android devices
 * @returns
 */
const checkAndroidStoragePermission = async () => {
  return new Promise(async (resolve, reject) => {
    let systemVersion = DeviceInfo.getSystemVersion();
    if (systemVersion > 12) {
      var granted = PermissionsAndroid.RESULTS.GRANTED;
      if (granted) {
        resolve("storage granted");
      } else {
        reject("storage denied");
      }
    } else {
      const permission1 = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
      const permission2 = PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;
      const hasPermission = await PermissionsAndroid.requestMultiple([
        permission1,
        permission2,
      ]);
      let per1 = hasPermission["android.permission.READ_EXTERNAL_STORAGE"];
      let per2 = hasPermission["android.permission.WRITE_EXTERNAL_STORAGE"];
      if (per1 === "granted" && per2 === "granted") {
        resolve("storage granted");
      } else {
        reject("storage denied");
      }
    }
  });
};

export { checkCameraPermissions, checkAndroidStoragePermission };
