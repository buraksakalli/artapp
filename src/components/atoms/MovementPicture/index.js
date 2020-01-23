import React, { Component } from 'react'
import { ImageBackground, StyleSheet } from 'react-native'


export class MovementPicture extends Component {
  render() {
    const { uri } = this.props;
    
    return (
      <ImageBackground style={styles.picture} source={{ uri: uri }} />
    )
  }
}

const styles = StyleSheet.create({
  picture: {
    height: 100,
  }
});

export default MovementPicture
