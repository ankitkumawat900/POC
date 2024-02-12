import {
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import ReactNativeBlobUtil from 'react-native-blob-util';
import {launchImageLibrary} from 'react-native-image-picker';

const UploadMedia = () => {
  const [videoUri, setVideoUri] = useState();

  const pickVid = async () => {
    // You can also use as a promise without 'callback':
    const result = await launchImageLibrary({mediaType: 'video'});
    console.log('image picker result ====>', result);

    console.log(result.assets[0].uri);
    setVideoUri(result.assets[0].uri);
    // compressVideo(result.assets[0].uri);
  };

  const uploadMediaDataFromGallery = async () => {
    const result = await launchImageLibrary({mediaType: 'video'});
    console.log('image picker result ====>', result);

    console.log(result.assets[0].uri);
    setVideoUri(result.assets[0].uri);

    console.log('start');
    const startTime = new Date();
    console.log(startTime);
    const testFileUrl =
      'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'; //  file URL

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
          console.log('Video uploaded Successfully');
          ToastAndroid.show('video Uploaded Succesfully !', ToastAndroid.SHORT);
        }) // listen to upload progress event

        .catch(err => {
          // error handling ..
        });

      //console.log(response);
    } catch (error) {
      console.error('Error during upload :', error);
    }
  };

  return (
    <View>
      <Text>UploadMedia</Text>

      {/* 
      <TouchableOpacity
        onPress={() => pickVid()}
        style={{
          backgroundColor: 'green',
          padding: 6,
          alignItems: 'center',
          borderRadius: 5,
        }}>
        <Text style={{color: 'white', fontSize: 16}}>Select video </Text>
      </TouchableOpacity> */}

      <TouchableOpacity
        onPress={() => uploadMediaDataFromGallery()}
        style={{
          backgroundColor: 'green',
          padding: 6,
          alignItems: 'center',
          borderRadius: 5,
        }}>
        <Text style={{color: 'white', fontSize: 16}}>
          select and Upload video{' '}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default UploadMedia;

const styles = StyleSheet.create({});
