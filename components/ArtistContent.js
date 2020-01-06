import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import Screen from '../src/utils/Screen';
import { Fonts } from './Fonts';

export default class ArtistContent extends Component {
  render() {
    const dimension = Screen.getDimension();
    const imgWidth = Math.round(dimension.width * .3333);
    const imgHeight = Math.round(dimension.height * .2225);
    const style = StyleSheet.create({
      content: {
        margin: 30
      },
      artistTitle: {
        fontSize: 45,
        lineHeight: 50,
        fontFamily: Fonts.Ogg,
        textTransform: 'uppercase',
        textAlign: 'right',
      },
      artistDescription: {
        fontSize: 20,
        fontFamily: Fonts.Ogg,
        marginTop: 30,
        lineHeight: 30
      },
      paintingsTitle: {
        fontSize: 14,
        fontFamily: Fonts.Maison,
        marginTop: 30,
      },
      paintingsWrapper: {
        marginTop: 20,
        fontFamily: Fonts.Ogg,
        display: 'flex',
        flexDirection: 'row'
      },
      paintingName: {
        fontSize: 14,
        fontFamily: Fonts.Ogg
      },
      paintingDate: {
        marginTop: 10,
        fontSize: 12,
        fontFamily: Fonts.Ogg
      },
      paintings: {
        width: imgWidth
      }
    });

    return (
      <View>
        <View style={style.content}>
          <Text style={style.artistTitle}>Rembrandt PEALE</Text>
          <Text style={style.artistTitle}>1733-1809</Text>
          <Text style={style.artistDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
          <View style={style.paintingsTitle}>
            <Text>PAINTINGS GALLERY</Text>
            <Text>IMAGES 24</Text>
          </View>
        </View>
        <ScrollView style={{marginLeft: 30}} horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={style.paintingsWrapper}>
            <View style={style.paintings}>
              <Image source={require('../assets/img/movements/the-persistence-of-memory.jpg')}></Image>
              <Text style={style.paintingDate}>1783-1801</Text>
              <Text style={style.paintingName}>The Ponte Salarios</Text>
            </View>
            <View style={style.paintings}>
              <Image source={require('../assets/img/movements/the-scream.jpg')}></Image>
              <Text style={style.paintingDate}>1738-46</Text>
              <Text style={style.paintingName}>Italian Mountainous Landscape</Text>
            </View>
            <View style={style.paintings}>
              <Image source={require('../assets/img/movements/the-starry-night.jpg')}></Image>
              <Text style={style.paintingDate}>1783-1801</Text>
              <Text style={style.paintingName}>The Sisters</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}
