import React, { Component } from 'react'
import { Text } from 'react-native'

export class Error extends Component {
  render() {
    const { errorMessage } = this.props;
    return (
      <Text>{`Error! ${errorMessage}`}</Text>
    )
  }
}

export default Error
