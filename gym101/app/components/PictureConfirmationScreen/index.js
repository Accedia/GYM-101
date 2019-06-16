import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import i18n from '@i18n'
import { fonts } from '@config'
import FirebaseML from '@firebaseML'

export default function PictureConfirmationScreen(props) {

  function getPrediction(pictureUri) {
    FirebaseML.show(
      pictureUri,
      error => {
        // TODO Handle error
        console.log(error)
      },
      (appliance, confidence) => {
        console.log(appliance)
        console.log(confidence)
      },
    )
  }

  console.log('props', props)
  const pictureUri =  props.navigation.state.params.pictureUri //"file:///data/user/0/com.gym101/cache/Camera/10a3d859-f583-4c70-98ce-8f068c79d1d8.jpg" //

  return (
    <View style={{ flex: 1, flexDirection: 'column'}}>
      <Text style={styles.explanation}>{ i18n.t('picture-confirmation-screen.explanation') }</Text>
      <View style={ styles.imageWrapper }>
        <Image
          style={ styles.image  }
          source={ { uri: pictureUri } }
        />
        <Text>{JSON.stringify(props)}</Text>
      </View>
      <Icon name="rocket" size={30} color="#900" />
    </View>
  )
}

const styles = StyleSheet.create({
  explanation: { 
    fontFamily: fonts.regular,
    fontSize: 20,
    lineHeight: 22,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  imageWrapper: {
    flex: 1,
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