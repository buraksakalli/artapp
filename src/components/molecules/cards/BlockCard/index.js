import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import Title from '../../../atoms/title';
import style from './style';
import CardImage from '../../../atoms/image';

export class BlockCard extends Component {
  render() {
    const { onPress, picture, title } = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
        <CardImage style={style.image} picture={picture}>
          <Title variant="artistName">{title}</Title>
        </CardImage>
      </TouchableOpacity>
    )
  }
}

export default BlockCard