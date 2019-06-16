import React from 'react'
import { View, Text, Image, StyleSheet, ToastAndroid, FlatList } from 'react-native'

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
    // this.fetchData(this.props.navigation.state.params.appliance).then(data => {
    //   console.log(data[0]);
    //   this.setState({ isLoading: false, data: data[0]})
    // }).catch(err => {
    //   console.log(err);
    //   ToastAndroid.show(err, ToastAndroid.LONG);
    // });
  }

// this.state.data.equipment


  render() {
    test = {"equipment":"Leg Press","exercises":[{"mainMuscleGroup":"Upper Legs","name":"Leg Press","otherMuscleGroups":["Lower Legs","Glutes"],"videoLink":"https://www.youtube.com/watch?v=3R0SOJ3alTAk"}]};
    return (
        !this.state.isLoading
        ? <Text> Loading... </Text>
        : <View style={styles.container}>
            <Text style={styles.explanation}>{ test.equipment }</Text>
            <FlatList
              data={test.exercises}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => 
                <View>
                  <Text>{item.name}</Text>
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text>Main Muscle Group: </Text><Text>{item.mainMuscleGroup}</Text>
                  </View>
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text>Other Muscle Groups: </Text>
                    {
                      item.otherMuscleGroups.map((otherMuscleGroup, index) => (
                          <Text key={index}>{otherMuscleGroup}, </Text>
                        )
                      )
                    }
                  </View>
                </View>
              }
            />
          </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  explanation: { 
    fontFamily: fonts.regular,
    fontSize: 40,
    lineHeight: 22,
    paddingVertical: 10
  }
})