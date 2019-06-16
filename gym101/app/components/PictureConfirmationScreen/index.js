import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'

import i18n from '@i18n'
import { fonts, colors } from '@config'
import FirebaseML from '@firebaseML'

import backward from './../../static/images/backward.png'
import forward from './../../static/images/forward.png'

export default function PictureConfirmationScreen(props) {

  function getPrediction(pictureUri) {
    return new Promise((resolve, reject) => {
      FirebaseML.show(
        pictureUri,
        error => {
          console.log(error);
          reject(error);
        },
        (appliance, confidence) => {
          console.log(appliance);
          console.log(confidence);
          resolve({ appliance, confidence});
        },
      )
    })
  }

  function tryNavigateForward(pictureUri) {
    getPrediction(pictureUri).then(prediction => {
      props.navigation.navigate('MachineDetails', prediction);
    }).catch(error => {
      console.log(error);
      ToastAndroid.show(error, ToastAndroid.LONG);
    });
  }

  function navigateBackward() {

  }
  console.log('props', props)
  const pictureUri =  props.navigation.state.params.pictureUri //"file:///data/user/0/com.gym101/cache/Camera/10a3d859-f583-4c70-98ce-8f068c79d1d8.jpg" //

  return (
    <View style={{ flex: 1, flexDirection: 'column', paddingHorizontal: 10}}>
      <Text style={styles.explanation}>{ i18n.t('picture-confirmation-screen.explanation') }</Text>
      <View style={ styles.imageWrapper }>
        <Image
          style={ styles.image  }
          source={ { uri: pictureUri } }
        />
        <View style={styles.navigationButtonContainer}>
          <TouchableOpacity style={styles.navigationButton} onPress={navigateBackward} >
            <Image source={backward}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navigationButton} onPress={() => tryNavigateForward(pictureUri)} >
            <Image source={forward}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  explanation: { 
    fontFamily: fonts.regular,
    fontSize: 20,
    lineHeight: 22,
    paddingVertical: 10
  },
  imageWrapper: {
    flex: 1,
    borderRadius: 4,
    overflow: 'hidden',
    alignItems: 'stretch'
  },
  image: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },  
  navigationButtonContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navigationButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
    height: 60,
    borderRadius: 100,
    
  },
})