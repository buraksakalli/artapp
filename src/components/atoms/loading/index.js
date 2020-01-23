import React, { Component } from 'react'
import { ActivityIndicator } from 'react-native'

export class Loading extends Component {
  render() {
    return (
      <ActivityIndicator size="large" color="#0000ff" />
    )
  }
}

export default Loading