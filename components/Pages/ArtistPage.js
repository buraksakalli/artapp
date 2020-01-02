import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground } from 'react-native'
import Header from '../Header';
import { Fonts } from '../Fonts';

export default class ArtistPage extends Component {
  render() {
    const style = StyleSheet.create({
      container: {
        flex: 1
      },
      bg: {
        flex: 1,
        resizeMode: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end'
      },
      info: {
        marginLeft: 30,
        marginBottom: 30,
      },
      year: {
        fontFamily: Fonts.OggItalic,
        fontSize: 16,
        color: '#EEEEEE',
      },
      name: {
        fontFamily: Fonts.Ogg,
        fontSize: 45,
        color: '#EEEEEE',
      }
    })
    return (
      <View style={style.container}>
        <Header />
        <ImageBackground style={style.bg} source={require('../../src/img/artists/rembrandt.jpg')}>
          <View style={style.info}>
            <Text style={style.year}>1778-1860</Text>
            <Text style={style.name}>Rembrandt Peale</Text>
          </View>

        </ImageBackground>
      </View>
    )
  }
}
