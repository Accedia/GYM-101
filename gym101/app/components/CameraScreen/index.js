import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, } from 'react-native'
import { RNCamera } from 'react-native-camera'

import i18n from "@i18n"
import { fonts, colors } from '@config'

export default class CameraScreen extends React.Component {
  takePicture = async () => {
    if (this.camera) {
      const options = {
        orientation: 0,
        fixOrientation: true,
      }

      const data = await this.camera.takePictureAsync(options)

      console.log(data.uri)

      this.props.navigation.navigate('PictureConfirmation', { pictureUri: data.uri })
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.explanationContainer}>
          <Text style={styles.explanation}>{i18n.t('camera-screen.explanation')}</Text>
        </View>

        <RNCamera
          ref={ref => this.camera = ref}
          captureAudio={false}
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

        <View style={styles.captureContainer}>
          <TouchableOpacity style={styles.capture} onPress={this.takePicture.bind(this)} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 10
  },

  explanationContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  explanation: {
    fontFamily: fonts.regular,
    fontSize: 20,
    lineHeight: 22,
    paddingVertical: 10,
  },
  preview: {
    flex: 1,
    borderRadius: 4,
    overflow: 'hidden',
  },
  captureContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  capture: {
    backgroundColor: '#fff',
    borderRadius: 5,
    alignSelf: 'center',
    borderColor: colors.yellow,
    backgroundColor: colors.grey,
    borderWidth: 5,
    marginVertical: 8,
    padding: 7,
    borderRadius: 100,
    width: 60,
    height: 60,
  },
})