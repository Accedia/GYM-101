import React from 'react'
import { Image } from 'react-native'

import { createStackNavigator, createAppContainer } from 'react-navigation'

import {
  CameraScreen,
  PictureConfirmationScreen,
} from '@components'


import { colors } from '@config'

import logoSmall from './../../static/images/logo_small.png'

const navigationOptions = {
  headerTitle: <Image source={logoSmall} />,
  headerStyle: {
    backgroundColor: colors.lightGrey,
  },
}

const routeConfigs = {
  Camera: { 
    screen: CameraScreen,
    navigationOptions,
  },
  PictureConfirmation: { 
    screen: PictureConfirmationScreen,
    navigationOptions,
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