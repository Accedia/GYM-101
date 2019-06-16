import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { RNCamera } from 'react-native-camera'

import i18n from "@i18n"
import { fonts } from '@config'


export default class CameraScreen extends React.Component {
  takePicture = async() => {
    if ( this.camera ) {
      const options = {
        orientation: 0,
        // pauseAfterCapture: true,
        fixOrientation: true,
      }

      const data = await this.camera.takePictureAsync(options)

      console.log(data.uri)

      this.props.navigation.navigate('PictureConfirmation', { pictureUri: data.uri })     
    }
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', paddingHorizontal: 10}}>
        <Text style={styles.explanation}>{ i18n.t('camera-screen.explanation') }</Text>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          captureAudio={ false }
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
         <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  explanation: { 
    fontFamily: fonts.regular,
    fontSize: 20,
    lineHeight: 22,
    paddingVertical: 10,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
})