import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, StatusBar } from 'react-native'
import Screen from '../../src/utils/Screen'


export default class FullscreenImagePage extends Component {
  render() {
    const dimension = Screen.getDimension();

    const style = StyleSheet.create({
      image: {
        width: dimension.width,
        height: dimension.height
      }
    })
    return (
      <View>
        <StatusBar hidden={true}></StatusBar>
        <Image style={style.image} source={require('../../assets/img/artists/rembrandt.jpg')} />
      </View>
    )
  }
}
