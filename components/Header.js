import React, { Component } from 'react'
import { StatusBar, View } from 'react-native'

export default class Header extends Component {
  render() {
    return (
      <StatusBar barStyle="dark-content" backgroundColor='#F2EFE8' hidden={true}></StatusBar>
    )
  }
}
