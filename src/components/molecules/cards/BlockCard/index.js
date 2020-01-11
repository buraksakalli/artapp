import React, { Component } from 'react'
import { TouchableOpacity, ImageBackground, StyleSheet } from 'react-native'
import Title from '../../../atoms/title';
import style from './style';

export class BlockCard extends Component {
  render() {
    const { onPress, picture, title } = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
        <ImageBackground style={style.image} source={{ uri: picture }}>
          <Title variant="artistName">{title}</Title>
        </ImageBackground>
      </TouchableOpacity>
    )
  }
}

export default BlockCard