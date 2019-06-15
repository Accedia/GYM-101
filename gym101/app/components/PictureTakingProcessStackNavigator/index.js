import React from 'react'
import { Image } from 'react-native'

import { createStackNavigator, createAppContainer } from 'react-navigation'

import {
  HomeScreen,
  CameraScreen
} from '@components'


import { colors } from '@config'

import logoSmall from './../../static/images/logo_small.png'

const routeConfigs = {
  Home: { 
    screen: HomeScreen,
  },
  Camera: { 
    screen: CameraScreen,
    navigationOptions: {
      headerTitle: <Image source={logoSmall} />,
      headerStyle: {
        backgroundColor: colors.lightGrey,
      },
    }
  }
}

const options = {
  initialRouteName: "Camera"
}

const AppNavigator = createStackNavigator(
  routeConfigs,
  options
);

export default createAppContainer(AppNavigator);