import React, { Component } from 'react'
import { Text } from 'react-native'
import styles from './style';

class Title extends Component {
  render() {
    const { children, variant } = this.props;
    const style = variant ? styles[variant] : styles.default
    return (
      <Text style={style}>{children}</Text>
    )
  }
}

export default Title