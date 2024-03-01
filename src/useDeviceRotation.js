import { useLayoutEffect, useRef } from 'react';
import { Platform } from 'react-native';

import { gravity } from 'react-native-sensors';


export const useDeviceRotationSensor = (degree) => {
  
  
    // We use gravity sensor here because react-native-orientation
    // can't detect landscape orientation when the device's orientation is locked
    

    let orientation = 'portrait';
      let rotation = 'left';
      if (degree > -135) rotation = 'top';
      if (degree > -45) rotation = 'right';
      if (degree > 45) rotation = 'down';
      if (degree > 135) rotation = 'left';

      if (Platform.OS === 'android') {
        rotation = 'right';
        if (degree > -135) rotation = 'down';
        if (degree > -45) rotation = 'left';
        if (degree > 45) rotation = 'top';
        if (degree > 135) rotation = 'right';
      }
      if (rotation === 'top') orientation='portrait';
      if (rotation === 'right') orientation='landscape-left';
      if (rotation === 'down') orientation='portrait-upside-down';
      if (rotation === 'left') orientation='landscape-right';

     // console.log("roations", rotation)
      //callbackRef.current(rotation, degree);
    
    return orientation;
  
};