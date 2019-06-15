import React from 'react'

import {
  SplashScreen,
  MaterialBottomTabNavigator,
} from '@components'



export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    setTimeout(()=> this.setState({isLoading: false}), 2000)
  }

  render() {
    return (
      this.state.isLoading
      ? <SplashScreen />
      : <MaterialBottomTabNavigator />
    )
  }
}