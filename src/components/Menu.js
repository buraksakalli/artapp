import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { Fonts } from '../utils/Fonts';
import Screen from '../utils/Screen';
import Header from './Header';

export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      item: ''
    })
  }

  menuItemPressed = (target) => {
    const { navigate } = this.props.navigation;
    navigate(target)
  }

  closeButtonPressed = (target) => {
    const { navigation } = this.props;
    navigation.goBack();
  }

  render() {
    const dimension = Screen.getDimension();
    const style = StyleSheet.create({
      container: {
        width: dimension.width,
        height: dimension.height,
        display: 'flex',
        flexDirection: 'column',
      },
      closeButton: {
        alignSelf: 'flex-end',
        fontSize: 22,
        marginRight: 20,
        marginTop: 20,
      },
      menu: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      },
      menuItem: {
        fontFamily: Fonts.Ogg,
        fontSize: 50,
      }
    });
    return (
      <View style={style.container}>
        <Header />
        <TouchableOpacity onPress={this.closeButtonPressed}>
          <Text style={style.closeButton}>✕</Text>
        </TouchableOpacity>
        <View style={style.menu}>
          <TouchableOpacity onPress={() => { this.menuItemPressed('MainPage') }}><Text style={style.menuItem}>Home</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => { this.menuItemPressed('ArtistPage') }}><Text style={style.menuItem}>Artists</Text></TouchableOpacity>
          <TouchableOpacity><Text style={style.menuItem}>Masterpieces</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => { this.menuItemPressed('MovementPage') }}><Text style={style.menuItem}>Art Movements</Text></TouchableOpacity>
          <TouchableOpacity><Text style={style.menuItem}>Contact</Text></TouchableOpacity>
        </View>
      </View>
    )
  }
}
