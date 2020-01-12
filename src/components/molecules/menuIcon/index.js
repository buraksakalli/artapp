import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { withNavigation } from 'react-navigation';
import style from './style';
import Button from 'components/atoms/button';

class MenuIcon extends Component {
  openMenu = () => {
    const { navigate } = this.props.navigation;
    navigate('Menu')
  }
  render() {
    return (
      <View>
        <Button style={style.button} onPress={this.openMenu}>
          <Text style={style.menu}>☰</Text>
        </Button>
      </View>
    )
  }
}

export default withNavigation(MenuIcon)
