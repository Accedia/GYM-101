import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontFamily: 'TwCenMTStd-UltraBold' }}>Home</Text>
        <Icon name="rocket" size={30} color="#900" />
      </View>
    );
  }
}