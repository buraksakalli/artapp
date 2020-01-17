import React, { Component } from 'react'
import { Text as RNText, StyleSheet } from 'react-native'
import { Fonts } from 'utils/Fonts';

export class Text extends Component {
  render() {
    const { children, variant } = this.props;
    const style = variant ? styles[variant] : styles.default
    return (
      <RNText style={style}>{children}</RNText>
    )
  }
}

const styles = StyleSheet.create({
  default: {
    fontFamily: Fonts.Ogg,
    fontSize: 16,
  },
  article: {
    fontFamily: Fonts.Ogg,
    fontSize: 20,
    marginBottom: 40,
    lineHeight: 30
  }
})

export default Text
