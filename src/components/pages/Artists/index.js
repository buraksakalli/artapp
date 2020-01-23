import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'
import Screen from 'utils/Screen';
import { Fonts } from 'utils/Fonts';
import ArtistBlock from 'containers/ArtistBlock';

export class Artists extends Component {
  render() {
    return (
      <ScrollView style={style.container}>
        <View style={style.wrapper}>
           <ArtistBlock /> 
        </View>
      </ScrollView>
    )
  }
}

const dimension = Screen.getDimension();
const Dimensions = {
  width: Math.round(dimension.width * ((100 * 140 / 360) / 100)),
  height: Math.round(dimension.height * ((100 * 160 / 851)) / 100),
  space: Math.round(dimension.width * ((100 * 20 / 360)) / 100),
  lineHeight: Math.round(dimension.width * ((100 * 30 / 360)) / 100),
  picWidth: Math.round(dimension.width * ((100 * 300 / 360) / 100)),
  picHeight: Math.round(dimension.width * ((100 * 200 / 851) / 100)),
}
const style = StyleSheet.create({
  container: {
    paddingLeft: 30,
    paddingTop: 40,
    paddingRight: 30,
    backgroundColor: "#F2EFE8"
  },
  image: {
    marginBottom: 10,
    display: 'flex',
    height: Dimensions.height,
    width: Dimensions.width,
    resizeMode: 'cover' // it's not necessary
  },
  header: {
    display: 'flex', flexDirection: 'column', justifyContent: 'center', marginBottom: 20
  },
  wrapper: {
    display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingBottom: 50
  },
  sectionDescription: {
    fontFamily: Fonts.Ogg,
    fontSize: 20,
    marginBottom: 40,
    lineHeight: 30
  },
  artistDate: {
    fontFamily: Fonts.Maison,
    fontSize: 13,
  },
  artistName: {
    fontFamily: Fonts.Ogg,
    fontSize: 15,
    display: 'flex',
    flexWrap: 'wrap'
  },
  artist: {
    width: Dimensions.width,
    marginBottom: 15,
  },
  artistCounter: {
    marginBottom: 25,
    fontFamily: Fonts.Maison,
    fontSize: 14
  },
  picture: {
    width: Dimensions.picWidth,
    height: Dimensions.picHeight,
  }
});

export default Artists