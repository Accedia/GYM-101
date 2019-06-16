import React from 'react'
import { View, Text, Image, StyleSheet, ToastAndroid } from 'react-native'

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
      console.log(`https://dr7v6vdke8.execute-api.us-east-1.amazonaws.com/dev/excercises?equipment=${encodeURIComponent(this.titleCase(appliance))}`)
      fetch(`https://dr7v6vdke8.execute-api.us-east-1.amazonaws.com/dev/excercises?equipment=${encodeURIComponent(this.titleCase(appliance))}`, {
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

  titleCase(str) {
    console.log("string to upper case: " + str);
    var splitStr = str.split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
  }
  
  componentDidMount() {
    this.fetchData(this.props.navigation.state.params.appliance).then(data => {
      console.log(data[0]);
      this.setState({ isLoading: false, data: data[0]})
    }).catch(err => {
      console.log(err);
      ToastAndroid.show(err, ToastAndroid.LONG);
    });
  }

  render() {
    return (
        this.state.isLoading
        ? <Text> Loading... </Text>
        : <View style={{ flex: 1, flexDirection: 'column', paddingHorizontal: 10}}>
            <Text style={styles.explanation}>{ this.state.data.equipment }</Text>
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