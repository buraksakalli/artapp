import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, Dimensions, ScrollView } from 'react-native'
import Header from '../Header';
import { Fonts } from '../Fonts';
import Screen from '../../src/utils/Screen';

export default class ArtistPage extends Component {
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
      }
    });
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.container}>
          <Header />
          <ImageBackground style={style.bg} source={require('../../assets/img/artists/rembrandt.jpg')}>
            <View style={style.info}>
              <Text style={style.year}>1778-1860</Text>
              <Text style={style.name}>Rembrandt Peale</Text>
            </View>

          </ImageBackground>
        </View>
        <View style={style.content}>
          <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
        </View>
      </ScrollView>
    )
  }
}
