import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import i18n from "@i18n"
import { fonts } from '@config'

export default class CameraScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column',}}>
        <Text style={styles.explanation}>{ i18n.t('camera-screen.explanation') }</Text>
        <Icon name="comments" size={30} color="#900" />
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
    paddingHorizontal: 10,
  }
})