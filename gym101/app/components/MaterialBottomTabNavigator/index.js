import React from "react"
import { createAppContainer } from "react-navigation"
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs"
import Icon from 'react-native-vector-icons/FontAwesome5'

import {
  HomeScreen,
  CameraScreen
} from '@components'

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