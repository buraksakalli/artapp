import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation';

class MenuIcon extends Component {
  openMenu = () => {
    const { navigate } = this.props.navigation;
    navigate('Menu')
  }
  render() {
    const style = StyleSheet.create({
      menu: {
        color: 'white',
        fontSize: 25
      },
      button: {
        position: 'absolute',
        right: 20,
        top: 20,
        zIndex: 3,
        borderColor: 'white',
      }
    })
    return (
      <View>
        <TouchableOpacity onPress={this.openMenu} style={style.button}>
          <Text style={style.menu}>☰</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default withNavigation(MenuIcon)
