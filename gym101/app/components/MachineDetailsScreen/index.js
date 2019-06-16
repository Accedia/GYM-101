import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

import { fonts } from '@config'

export default class MachineDetailsScreen extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      isLoading: true
    }
  }
  fetchData(appliance) {
    return new Promise((resolve, reject) => {
      console.log(`https://dr7v6vdke8.execute-api.us-east-1.amazonaws.com/dev/excercises?equipment=${encodeURIComponent(appliance)}`)
      fetch(`https://dr7v6vdke8.execute-api.us-east-1.amazonaws.com/dev/excercises?equipment=${encodeURIComponent(appliance)}`, {
        method: 'GET',
        headers: {
          'x-api-key': 'YVrUE6lafIeMXH2o0sEIaCRMgj5cHu18VdfS4XC4'
        }
      })
      .then((response) => response.json())
      .then((responseJson) => {
        resolve(responseJson)
      }).catch((error) => {
        reject(error)
      });
     })
  }
  
  componentDidMount() {
    this.fetchData(this.props.navigation.state.params.appliance).then(data => {
      this.setState({ isLoading: false, data})
    }).then(err => {
      console.log(err);
    });
  }

  render() {
    return (
        this.state.isLoading
        ? <Text> its loading </Text>
        : <View style={{ flex: 1, flexDirection: 'column', paddingHorizontal: 10}}>
            <Text style={styles.explanation}>{ this.props.navigation.state.params.appliance }</Text>
            <Text style={styles.explanation}>{ this.props.navigation.state.params.confidence }</Text>
          </View>
    )
  }
}

const styles = StyleSheet.create({
  explanation: { 
    fontFamily: fonts.regular,
    fontSize: 20,
    lineHeight: 22,
    paddingVertical: 10
  }
})