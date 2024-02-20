import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

import PinturaEditor from '@pqina/react-native-pintura';

import {
    appendNode,
    createMarkupEditorToolStyle,
    createMarkupEditorToolStyles,
    createMarkupEditorToolbar,
    createNode,
    getEditorDefaults,
  } from '@pqina/pintura';
import { launchImageLibrary } from 'react-native-image-picker';

const Testing = () => {

    const [editorEnabled, setEditorEnabled] = useState(true);
    const editorRef = useRef(null);

    const toolbarOptions = ['rectangle', 'arrow' ]

    const [editorSource, setEditorSource] = useState('');
    
  const editorDefaults = getEditorDefaults();

  useEffect(() => {
    console.log('editor source-', editorSource);
  }, [editorSource]);

  return (
    <View>
        {editorEnabled && (
      <PinturaEditor
       ref={editorRef}
                 
                 style={styles.pintura}
                 styleRules={`
                 .pintura-editor {
                     --color-background: 255, 255, 255;
                     --color-foreground: 0, 0, 0;
                 }
             `}
                 src={editorSource}
                markupEditorToolbar={createMarkupEditorToolbar([
                    ['sharpie'],
                    ['rectangle']
                ])}
                onLoaderror={err => {
                    console.log('onLoaderror', err);
                  }}
                  onLoad={({size}) => {
                    console.log('onLoad', size);
                  }}
                  onProcess={({dest, imageState}) => {
                    // dest is output file in dataURI format
                    console.log('onProcess', imageState);
                    
                  }}
            />
        )}
            <TouchableOpacity
          style={styles.buttonStyle}
          onPress={async () => {
            // Use ImagePicker to get a base64 image string
            let {assets, didCancel} = await launchImageLibrary({
              mediaType: 'mixed',
              selectionLimit: 1,
              quality: 1,
              includeBase64: true,
            });

            // user cancelled early
            if (didCancel || !assets) {
              return;
            }

            // get image reference
            const [asset] = assets;

            // Somehow the asset size can be 0
            if (!asset.uri || asset.width === 0 || asset.height === 0) {
              console.error('Failed to load', asset);
              return;
            }

            // video to base64
            let base64 = asset.base64;
            if (!base64) {
              base64 = await RNFS.readFile(asset.uri, 'base64');
            }

            // console.log(base64);
            //  console.log("data",asset);

            // send data url to editor
            setEditorSource(`data:${asset.type};base64,${base64}`);
          }}>
          <Text style={styles.buttonTextStyle}>Browse...</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Testing

const styles = StyleSheet.create({
    pintura: {
        width: '95%',
        height: '80%',
        borderWidth: 1,
        borderColor: '#eee',
      },
      buttonStyle: {
        backgroundColor: '#222',
        paddingTop: 5,
        paddingBottom: 5,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginHorizontal: 5,
      },
      buttonTextStyle: {
        color: '#fff',
        textAlign: 'center',
      },
})