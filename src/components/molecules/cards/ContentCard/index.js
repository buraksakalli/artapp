import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import { Fonts } from 'utils/Fonts';

export class ContentCard extends Component {
  render() {
    const { date, title, pictureUrl, onPress } = this.props;
    return (
      <TouchableOpacity style={style.container} onPress={onPress}>
        <ImageBackground style={style.image} source={{ uri: pictureUrl }} />
        {
          date && <Text style={style.artistDate}>{date}</Text>
        }
        <Text style={style.artistName}>{title}</Text>
      </TouchableOpacity>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 0,
    flexBasis: '50%',
    marginBottom: 15,
  },
  image: {
    padding: 4,
    marginBottom: 10,
    width: '100%',
    height: 160,
    resizeMode: 'cover'
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
});

export default ContentCard
