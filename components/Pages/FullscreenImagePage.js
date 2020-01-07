import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, StatusBar, TouchableOpacity, Share } from 'react-native'
import Screen from '../../src/utils/Screen'
import { NavigationActions } from 'react-navigation';

export default class FullscreenImagePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pictureURL: null
    }
  }

  componentDidMount() {
    const { navigation } = this.props;
    this.setState({
      pictureURL: navigation.getParam('pictureURL', null)
    })
  }

  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

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
        <TouchableOpacity onLongPress={this.onShare} onPress={() => { this.props.navigation.goBack() }}>
          <Image style={style.image} source={{ uri: this.state.pictureURL }} />
        </TouchableOpacity>
      </View >
    )
  }
}