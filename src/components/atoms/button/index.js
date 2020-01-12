import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'

class Button extends Component {
  render() {
    const { style, children } = this.props;
    return (
      <TouchableOpacity style={style}>
        {children}
      </TouchableOpacity>
    )
  }
}

export default Button
