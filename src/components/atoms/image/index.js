import React, { Component } from 'react'
import { ImageBackground } from 'react-native'

class CardImage extends Component {
  render() {
    const { style, picture, children } = this.props;
    return (
      <ImageBackground style={style} source={{ uri: picture }}>
        {children}
      </ImageBackground>
    )
  }
}

export default CardImage