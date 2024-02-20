import {
  Alert,
  Button,
  Image,
  Modal,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import PinturaEditor from '@pqina/react-native-pintura';

import RNFS from 'react-native-fs';
// // createDefaultColorOptions,
// createMarkupEditorToolStyle,
// createMarkupEditorToolStyles,
// createMarkupEditorToolbar,
// createNode,
// getEditorDefaults,
import {
  createDefaultColorOptions,
  createMarkupEditorToolStyle,
  createMarkupEditorToolStyles,
  createMarkupEditorToolbar,
  createNode,
  getEditorDefaults,
  appendNode,
  createDefaultImageReader,
  createDefaultImageWriter,
  createDefaultImageOrienter,
  createDefaultShapePreprocessor,
  setPlugins,
  plugin_annotate,
  plugin_crop,
  markup_editor_defaults,
  locale_en_gb,
  markup_editor_locale_en_gb,
  plugin_annotate_locale_en_gb,
  plugin_crop_locale_en_gb,
} from '@pqina/pintura';
import {launchImageLibrary} from 'react-native-image-picker';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';

import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';

const Home = () => {
    console.log("plugin",locale_en_gb);
  const editorDefaults = {
    imageReader: createDefaultImageReader(),
    imageWriter: createDefaultImageWriter(),
    imageOrienter: createDefaultImageOrienter(),
    shapePreprocessor: createDefaultShapePreprocessor(),
    ...markup_editor_defaults,
    locale: {
      ...locale_en_gb,
      ...plugin_crop_locale_en_gb,
      ...plugin_annotate_locale_en_gb,
      ...markup_editor_locale_en_gb,
    },
  };

  const [editorEnabled, setEditorEnabled] = useState(true);

  const [editorSource, setEditorSource] = useState('');

  const [editedContent, setEditedContent] = useState();

  const [editedImageUri, setEditedImageUri] = useState();

  const [modalVisible, setModalVisible] = useState(false);

  const [imageOtherDetails, setImageOtherDetails] = useState();

  const editorRef = useRef(null);

  // const editorDefaults = getEditorDefaults();

  useEffect(() => {
   // console.log('editor source-', editorSource);
  }, [editorSource]);

  const base64ToImageUri = base64Data => {
    return `data:image/jpeg;base64,${base64Data}`;
  };

  const saveEditedImage = async imageData => {
    try {
      // Create a temporary directory for storing the edited image
      const tempDir =
        Platform.OS === 'ios'
          ? RNFS.TemporaryDirectoryPath
          : RNFS.ExternalDirectoryPath;
      const tempFilePath = `${tempDir}/edited_image_${Date.now()}.jpg`;

      // Write the edited image data to the temporary file
      await RNFS.writeFile(tempFilePath, imageData, 'base64');

      return tempFilePath;
    } catch (error) {
      console.error('Failed to save edited image:', error);
      return null;
    }
  };

  const dataUriToImageUri = dataUri => {
    // Split the data URI string to extract the base64-encoded image data
    const base64Data = dataUri.split(',')[1];

    // Construct the image URI using the base64 data
    return base64Data;
  };

  const saveImageToGallery = async imageUriData => {
    // if (Platform.OS === "android" && !(await hasAndroidPermission())) {
    //     return;
    //   }

    check(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE)
      .then(result => {
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
            request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE).then(result => {
              console.log(result);

              saveEditedImage(imageUriData).then(async tempFilePath => {
                console.log(tempFilePath);
                try {
                  const saveResult = await CameraRoll.save(tempFilePath);
                  console.log('Image saved to gallery:', saveResult);
                } catch (error) {
                  console.error('Failed to save image to gallery:', error);
                }
              });
            });
            break;
          case RESULTS.LIMITED:
            console.log('The permission is limited: some actions are possible');
            break;
          case RESULTS.GRANTED:
            console.log('The permission is granted');
            saveEditedImage(imageUriData).then(async tempFilePath => {
              console.log(tempFilePath);
              try {
                const saveResult = await CameraRoll.save(tempFilePath);
                ToastAndroid.show(
                  'Image saved to gallery!!!',
                  ToastAndroid.SHORT,
                );
                Alert.alert('Image saved to gallery!!!');
                console.log('Image saved to gallery:', saveResult);
              } catch (error) {
                console.error('Failed to save image to gallery:', error);
              }
            });
            break;
          case RESULTS.BLOCKED:
            console.log('The permission is denied and not requestable anymore');
            break;
        }
      })
      .catch(error => {
        // …
      });
  };

  const willRenderToolbar = (toolbar, env, redraw) => {
    console.log("toolbar item",toolbar);
    // logs: [ Array(4), Array(4), Array(4) ]

    console.log(env);
    // logs: { orientation: "landscape", verticalSpace: "short", … }

    // call redraw to trigger a redraw of the editor state

    // insert your item
    return [
      ...toolbar
    ]
  };

  const willRenderShapePresetToolbar = (nodes, addPreset) => {
    // create smile button
    const smileButton = createNode('Button', 'smile-button', {
      label: 'Add smile',
      onclick: () => addPreset('hi'),
    });

    // add it to the node tree
    appendNode(smileButton, nodes);

    // return the new node tree
    return nodes;
  };

  const willRenderCanvas = (shapes, state) => {
    const { utilVisibility, selectionRect, backgroundColor, lineColor } =
        state;

    // exit if crop utils is not visible
    if (utilVisibility.crop <= 0) return shapes;

    // shortcuts to selection rect
    const { x, y, width, height } = selectionRect;

    // return updated shapes
    return {
        // copy props from shapes param
        ...shapes,

        // add an 'ellipse' shape
        interfaceShapes: [
            {
                x: x + width * 0.5,
                y: y + height * 0.5,
                rx: width * 0.5,
                ry: height * 0.5,
                opacity: utilVisibility.crop,
                inverted: true,
                backgroundColor: [...backgroundColor, 0.5],
                strokeWidth: 1,
                strokeColor: [...lineColor],
            },
            ...shapes.interfaceShapes,
        ],
    };
};


  return (
    <View style={styles.container}>
      {/* The Pintura Editor component */}

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
        
      // willRenderToolbar={willRenderToolbar}
        //willRenderShapePresetToolbar={willRenderShapePresetToolbar}
        enableToolbar={true}
        
          // markupEditorToolbar={[['rectangle','rectangle', {icon:'rectangle'}],['arrow','arrow',]]}
          locale={ {labelButtonExport: 'Save' }}
          util={'annotate'}
          annotateActiveTool={'rectangle'}
            utils={[
              'annotate',
              'finetune',
              // 'decorate',
            'crop',
            'rotate',
            'flip',
            'flipRotate',
            //'resize',
              'draw',
              'text',
              'frame',
              'redact',
             // 'resize',
            //  'line',
            ]}
            //   markupEditorToolbar={[
            //       ['sharpie', 'Sharpie', {icon:'sharpie'}],
            //       ['eraser', 'Eraser',{icon:'eraser'} ],
            //       ['rectangle', 'Rectangle', {icon:'rectangle'}],
            //   ]}
            markupEditorToolbar={createMarkupEditorToolbar([
                ['rectangle', 'Rectangle',{icon: '<g stroke-width=\".125em\" stroke=\"currentColor\" fill=\"none\"><rect x=\"1\" y=\"1\" width=\"22\" height=\"22\" rx=\"4\"/></g>'}],
                ['ellipse','circle',{icon:'<path stroke-width=\".125em\" stroke=\"currentColor\" d=\"M1.21 9.853a11.054 11.054 0 0 0 0 4.294m1.643 3.965a11.054 11.054 0 0 0 3.035 3.035m3.965 1.644a11.054 11.054 0 0 0 4.294 0m3.965-1.644a11.054 11.054 0 0 0 3.035-3.035m1.644-3.965a11.054 11.054 0 0 0 0-4.294m-1.644-3.965a11.054 11.054 0 0 0-3.035-3.035m-3.965-1.644a11.054 11.054 0 0 0-4.294 0M5.888 2.853a11.054 11.054 0 0 0-3.035 3.035\"/>'}],
                ['sharpie', 'Sharpie',{icon:'<g stroke-width=".125em" stroke="currentColor" fill="none"><path d="M2.025 5c5.616-2.732 8.833-3.857 9.65-3.374C12.903 2.351.518 12.666 2.026 14 3.534 15.334 16.536.566 17.73 2.566 18.924 4.566 3.98 17.187 4.831 18c.851.813 9.848-6 11.643-6 1.087 0-2.53 5.11-2.92 7-.086.41 3.323-1.498 4.773-1 .494.17.64 2.317 1.319 3 .439.443 1.332.776 2.679 1" stroke="currentColor" stroke-width=".125em" fill="none" fill-rule="evenodd" stroke-linejoin="round"/></g>'},{disabled:'false' }],
         
               ['arrow', 'Arrow',{icon:'<g stroke-width=\".125em\" stroke=\"currentColor\" fill=\"none\"><line x1=\"20\" y1=\"3\" x2=\"6\" y2=\"21\"/><path d=\"m10 6 L21.5 1 L20 13.5\" fill=\"currentColor\" stroke=\"none\"/></g>'},{disabled:'false' }],
               ['text', 'text',{icon:'<g stroke="none" fill="currentColor" transform="translate(6,0)"><path d="M8.14 20.085c.459 0 .901-.034 1.329-.102a8.597 8.597 0 001.015-.21v1.984c-.281.135-.695.247-1.242.336a9.328 9.328 0 01-1.477.133c-3.312 0-4.968-1.745-4.968-5.235V6.804H.344v-1.25l2.453-1.078L3.89.819h1.5v3.97h4.97v2.015H5.39v10.078c0 1.031.245 1.823.735 2.375s1.161.828 2.015.828z"/>'},{disabled:'false' }],
               ['eraser','Eraser',{icon:'<g stroke-width=".125em" stroke="currentColor" stroke-linecap="round" fill="none"><g transform="translate(3, 15) rotate(-45)"><rect x="0" y="0" width="18" height="10" rx="3"/></g><line x1="11" y1="21" x2="18" y2="21"/><line x1="20" y1="21" x2="22" y2="21"/></g>'}]
                 ])}

            markupEditorToolStyles={createMarkupEditorToolStyles({
              // key, style
              rectangle: createMarkupEditorToolStyle('rectangle', {
                  strokeColor: createDefaultColorOptions().yellow,
                  strokeWidth: '1%',      
              }),
              ellipse: createMarkupEditorToolStyle('ellipse', {
                strokeColor: createDefaultColorOptions().yellow,
                strokeWidth: '1%',      
            }),
              text: createMarkupEditorToolStyle('text', {
                fontSize: '10%',
            }),
          })}

          
          
          //  markupEditorToolStyles={createMarkupEditorToolStyles({
          //     // create the text tool style and override fontSize property
          //     text: createMarkupEditorToolStyle('text', {
          //         fontSize: '20%',
          //     }),
          // })}



          src={editorSource}
          onLoaderror={err => {
            console.log('onLoaderror', err);
          }}
          onLoad={({size}) => {
            console.log('onLoad', size);
          }}
          onProcess={({dest, imageState}) => {
            // dest is output file in dataURI format
            console.log('onProcess', imageState);
            setEditedContent(dest);

            const imageUri = dataUriToImageUri(dest);
           // console.log('Image URI:', imageUri);

            setEditedImageUri(imageUri);
            setImageOtherDetails(imageState);
          }}
        />
      )}

      <View style={styles.buttonRow}>
        {/* Example removing and adding the editor */}
        {/* <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            setEditorEnabled(!editorEnabled);
          }}>
          <Text style={styles.buttonTextStyle}>open/close</Text>
        </TouchableOpacity> */}

        {/* Example running an editor function */}
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            if (!editorRef.current) {
              return;
            }

            // Run editor function
            editorRef.current.editor.history.undo();
          }}>
          <Text style={styles.buttonTextStyle}>Undo</Text>
        </TouchableOpacity>

        

        {/* Example selecting a library image */}
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

        <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
          style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>View Edited Image</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>This is a last edited image!</Text>
            <Image
              source={{
                uri: editedContent,
              }}
              style={{width: 'auto', height: 430, resizeMode: 'contain'}}
            />
            <Text></Text>
            <Button
              title="save to camera roll"
              onPress={() => saveImageToGallery(editedImageUri)}></Button>
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pintura: {
    width: '100%',
    height: '85%',
    borderWidth: 1,
    borderColor: '#eee',
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 20,
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
    fontSize: 14,
    color: '#fff',
  },
  editedContent: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
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
