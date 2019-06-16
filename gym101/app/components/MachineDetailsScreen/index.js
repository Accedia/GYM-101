import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

import { fonts } from '@config'

export default function MachineDetailsScreen(props) {
  console.log('props', props)

  return (
    <View style={{ flex: 1, flexDirection: 'column', paddingHorizontal: 10}}>
      <Text style={styles.explanation}>{ 'testing machine details' }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  explanation: { 
    fontFamily: fonts.regular,
    fontSize: 20,
    lineHeight: 22,
    paddingVertical: 10
  }
})