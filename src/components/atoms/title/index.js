import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import { Fonts } from '../../../utils/Fonts';

class Title extends Component {
  render() {
    const { children, variant } = this.props;
    const style = variant ? styles[variant] : styles.default
    return (
      <Text style={style}>{children}</Text>
    )
  }
}

const styles = StyleSheet.create({
  default: {
    fontSize: 20,
    fontFamily: Fonts.Ogg,
    marginBottom: 10,
  },
  section: {
    fontSize: 36,
    fontFamily: Fonts.Ogg,
    marginBottom: 10,
  },
  error: {

  },
  artistName: {
    color: 'white',
    fontFamily: Fonts.Ogg,
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    flexWrap: 'wrap',
  },
});

export default Title