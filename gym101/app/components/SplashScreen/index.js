import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import i18n from '@i18n'
import { fonts } from '@config'

import logo from './../../static/images/logo.png'

export default function SplashScreen() {
  return (  
    <View style={styles.constainer}>
      <Image source={logo} />
      
      <Text style={ styles.greeting }>
        { i18n.t('splash-screen.greeting') }
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  logo: {
    
  },
  greeting: {
    fontFamily: fonts.regular,
    fontSize: 50,
    textAlign: 'center',
  }
})