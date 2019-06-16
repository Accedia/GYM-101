import React from 'react'
import { Image } from 'react-native'

import { createStackNavigator, createAppContainer } from 'react-navigation'

import {
  CameraScreen,
  MachineDetailsScreen,
  PictureConfirmationScreen,
} from '@components'


import { colors } from '@config'

import logoSmall from './../../static/images/logo_small.png'
import NotConfidentPredictionScreen from '../NotConfidentPredictionScreen';

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
  },
  MachineDetails: { 
    screen: MachineDetailsScreen,
    navigationOptions,
  },
  NotConfidentPrediction: {
    screen: NotConfidentPredictionScreen,
    navigationOptions
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