import React, { Component } from 'react'
import { TouchableOpacity, ImageBackground, StyleSheet } from 'react-native'
import Title from '../../../atoms/title';

export class BlockCard extends Component {
  render() {
    const { onPress, picture, title } = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
        <ImageBackground style={styles.image} source={{ uri: picture }}>
          <Title variant="artistName">{title}</Title>
        </ImageBackground>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    marginRight: 20,
    display: 'flex',
    justifyContent: 'flex-end',
    height: 160,
    width: 120,
    resizeMode: 'cover' // it's not necessary
  },
});

export default BlockCard
