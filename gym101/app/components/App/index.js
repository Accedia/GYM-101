import React from 'react'

import { connect } from 'react-redux'

import {
  SplashScreen,
  MaterialBottomTabNavigator,
} from '@components'

import { types } from '@actions'

class App extends React.Component {
  componentDidMount() {
    setTimeout(()=> this.props.dispatch({type: types.SET_IS_APP_LOADING, payload: false}), 2000)
  }

  render() {
    return (
      this.props.isLoading
      ? <SplashScreen />
      : <MaterialBottomTabNavigator />
    )
  }
}

export default connect(
  state => ({
    isLoading: state.flags.isLoading
  }),
  dispatch => ({dispatch})
)(App)