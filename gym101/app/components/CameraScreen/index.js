import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import i18n from "@i18n"

export default class CameraScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontFamily: 'TwCenMTStd-UltraBold' }}>{ i18n.t('goodbye') }</Text>
        <Icon name="comments" size={30} color="#900" />
      </View>
    );
  }
}