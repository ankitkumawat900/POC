import React, { useEffect, useState } from 'react'
import { View, Text, Button } from 'react-native'
import { check, request, RESULTS, PERMISSIONS } from 'react-native-permissions'

const CamPer = () => {
  const [cameraPermission, setCameraPermission] = useState(null)

  const requestCameraPermission = async () => {
    try {
      const result = await request(PERMISSIONS.ANDROID.CAMERA)
      setCameraPermission(result)
    } catch (error) {
      console.log('Error requesting camera permission: ', error)
    }
  }

  const checkCameraPermission = async () => {
    try {
      const result = await check(PERMISSIONS.ANDROID.CAMERA)
      setCameraPermission(result)
    } catch (error) {
      console.log('Error checking camera permission: ', error)
    }
  }

  useEffect(() => {
    checkCameraPermission()
  }, [])

  const handleGrantPermission = () => {
    requestCameraPermission()
  }

  const handleDenyPermission = () => {
    setCameraPermission(RESULTS.DENIED)
  }

  return (
    <View>
      {cameraPermission === RESULTS.UNAVAILABLE && (
        <Text>Camera permission is not available on this device.</Text>
      )}
      {cameraPermission === RESULTS.DENIED && (
        <View>
          <Text>Camera permission is required to use the camera.</Text>
          <Button title="Grant Permission" onPress={handleGrantPermission} />
          <Button title="Deny Permission" onPress={handleDenyPermission} />
        </View>
      )}
      {cameraPermission === RESULTS.GRANTED && (
        <Text>Camera permission has been granted.</Text>
      )}
      {cameraPermission === RESULTS.BLOCKED && (
        <Text>Camera permission is blocked. Go to settings to unblock it.</Text>
      )}
    </View>
  )
}

export default CamPer
