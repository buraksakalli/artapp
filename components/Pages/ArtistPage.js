import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, ScrollView, Image } from 'react-native'
import Header from '../Header';
import { Fonts } from '../Fonts';
import Screen from '../../src/utils/Screen';
import Content from '../ArtistContent';

export default class ArtistPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      x: 0,
      y: 0
    }
  }

  scroll = (event) => {
    this.setState({
      x: event.nativeEvent.contentOffset.x,
      y: event.nativeEvent.contentOffset.y
    });
  }

  render() {
    // Getting screen dimensions
    const dimension = Screen.getDimension();

    const style = StyleSheet.create({
      container: {
        width: dimension.width,
        height: dimension.height,
        backgroundColor: '#F2EFE8'
      },
      bg: {
        width: dimension.width,
        height: dimension.height,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end'
      },
      info: {
        paddingLeft: 30,
        paddingBottom: 30,
        paddingRight: 40,
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
      },

    });
    return (
      <ScrollView showsVerticalScrollIndicator={false} onScroll={this.scroll}>
        <View style={style.container}>
          <Header />
          <ImageBackground style={style.bg} source={require('../../assets/img/artists/rembrandt.jpg')}>
            <View style={style.info}>
              <Text style={style.year}>1778-1860</Text>
              <Text style={style.name}>Rembrandt Peale</Text>
            </View>

          </ImageBackground>
        </View>
        <Content />
      </ScrollView>
    )
  }
}
