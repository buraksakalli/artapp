import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Title from 'components/atoms/title'

export class PageTitles extends Component {
  render() {
    const {title, subtitle} = this.props;
    return (
      <View style={styles.container}>
        <Title variant="section">{title}</Title>
        <Title variant="artMovement">{subtitle}</Title>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default PageTitles
