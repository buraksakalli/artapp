import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import Screen from '../../src/utils/Screen'
import { Fonts } from '../Fonts';
import Header from '../Header';
import MenuIcon from '../MenuIcon';

export default class PaintingPage extends Component {

  paintingPressed = () => {
    const { navigate } = this.props.navigation;
    navigate('FullscreenImagePage')
  }

  render() {
    const dimension = Screen.getDimension();
    const style = StyleSheet.create({
      image: {
        height: dimension.height * .70,
        width: dimension.width,
        marginBottom: 10
      },
      header: {
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      },
      headerInfo: {
        fontFamily: Fonts.Ogg,
        fontSize: 12,
      },
      paintingName: {
        fontFamily: Fonts.Ogg,
        fontSize: 30,
        lineHeight: 30,
      },
      content: {
        marginLeft: 20,
        marginBottom: 30
      },
      contentInfo: {
        fontFamily: Fonts.MaisonLight,
        fontSize: 12,
        paddingBottom: 10
      }
    });
    return (
      <View>
        <MenuIcon/>
        <Header />
        <TouchableOpacity onPress={this.paintingPressed}>
          <Image style={style.image} source={require('../../assets/img/artists/rembrandt.jpg')} />
        </TouchableOpacity>
        <View style={style.header}>
          <Text style={style.headerInfo}>1622</Text>
          <Text style={style.paintingName}>The Starry Night</Text>
          <Text style={style.headerInfo}>Van Gogh</Text>
        </View>
        <ScrollView>
          <View style={style.content}>
            <Text style={style.contentInfo}>Genre: religious painting</Text>
            <Text style={style.contentInfo}>Location: National Gallery of Ancient Art, Rome, Italy</Text>
            <Text style={style.contentInfo}>Style: Baroque</Text>
            <Text style={style.contentInfo}>Dimensions: 91 x 81 cm</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}
