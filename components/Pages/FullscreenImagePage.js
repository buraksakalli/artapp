import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, StatusBar } from 'react-native'
import Screen from '../../src/utils/Screen'
import { NavigationActions } from 'react-navigation';

export default class FullscreenImagePage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      pictureURL: null
    }
  }
  
  componentDidMount(){
    const { navigation } = this.props;
    this.setState({
      pictureURL: navigation.getParam('pictureURL', null)
    })
  }

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
        <Image style={style.image} source={{uri: this.state.pictureURL}} />
      </View>
    )
  }
}