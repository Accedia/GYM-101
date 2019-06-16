import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'

import i18n from '@i18n'
import { fonts, colors } from '@config'
import FirebaseML from '@firebaseML'

import powerTower from './../../static/images/power_tower.jpg'
import legPress from './../../static/images/leg_press.png'
import benchPress from './../../static/images/bench_press.jpg'

import backward from './../../static/images/backward.png'
import forward from './../../static/images/forward.png'

export default function NotConfidentPredictionScreen(props) {

  console.log('props', props)
  const equipmentName =  props.navigation.state.params.appliance

  let imageName;

  // TODO Should come from api response
  if (equipmentName === 'power tower') {
    imageName = powerTower;
  } else if (equipmentName === 'leg press') {
    imageName = legPress;
  } else if (equipmentName === 'bench press') {
    imageName = benchPress;
  }

  function navigateForward() {
    props.navigation.navigate('MachineDetails', { appliance: equipmentName });
  }

  function navigateBackward() {

  }

  return (
    <View style={{ flex: 1, flexDirection: 'column', paddingHorizontal: 10}}>
      <Text style={styles.explanation}>{ i18n.t('not-confident-prediction-screen.explanation') }</Text>
      <Text>{equipmentName}</Text>
      <Image style={styles.image} source={imageName}/>

      <View style={styles.navigationButtonContainer}>
          <TouchableOpacity style={styles.navigationButton} onPress={navigateBackward} >
            <Image source={backward}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navigationButton} onPress={() => navigateForward()} >
            <Image source={forward}/>
          </TouchableOpacity>
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
  image: {
    flex: 1,
    padding: 30,
    width: undefined,
    height: undefined
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