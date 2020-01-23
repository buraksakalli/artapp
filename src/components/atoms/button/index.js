import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'

class Button extends Component {
  render() {
    const { style, children, onPress } = this.props;
    return (
      <TouchableOpacity style={style} onPress={onPress}>
        {children}
      </TouchableOpacity>
    )
  }
}

export default Button
