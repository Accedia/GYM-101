import React from "react";
import { View, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome5';

import i18n from "./i18n";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontFamily: 'TwCenMTStd-UltraBold' }}>Home</Text>
        <Icon name="rocket" size={30} color="#900" />
      </View>
    );
  }
}


class CameraScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontFamily: 'TwCenMTStd-UltraBold' }}>{ i18n.t('hello') }</Text>
        <Icon name="comments" size={30} color="#900" />
      </View>
    );
  }
}

const routeConfigs = {
  Home: { 
    screen: HomeScreen, 
    navigationOptions: {
      tabBarIcon: <Icon name="home" size={25} color="#FFF" /> 
    }
  },
  Camera: { 
    screen: CameraScreen,
    navigationOptions: {
      title: 'title test',
      tabBarLabel: 'tob bar label test',
      tabBarIcon: <Icon name="camera" size={20} color="#FFF" /> 
    }
  }
}

const materialBottomTabNavigatorConfig = {
  initialRouteName: 'Home',
  activeColor: '#f0edf6',
  inactiveColor: '#3e2465',
  barStyle: { backgroundColor: '#694fad' },
  shifting: true,
}

const AppNavigator = createMaterialBottomTabNavigator(
  routeConfigs,
  materialBottomTabNavigatorConfig
);

export default createAppContainer(AppNavigator);