import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import Header from '../Header';
import { Fonts } from '../Fonts';

export default class MainPage extends Component {
  artistPressed = () => {
    const { navigate } = this.props.navigation;
    navigate('ArtistPage');
  }

  render() {
    const style = StyleSheet.create({
      container: {
        paddingLeft: 20,
        paddingTop: 20,
        backgroundColor: "#F2EFE8"
      },
      section: {
        marginBottom: 30,
      },
      sectionTitle: {
        fontSize: 36,
        fontFamily: Fonts.Ogg,
        marginBottom: 10,
      },
      wrapper: {
        display: 'flex',
        flexDirection: 'row',
      },
      image: {
        marginRight: 20,
        display: 'flex',
        justifyContent: 'flex-end',
        height: 160,
        width: 120,
        resizeMode: 'cover' // it's not necessary
      },
      artistName: {
        color: 'white',
        fontFamily: Fonts.Ogg,
        fontSize: 18,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        flexWrap: 'wrap',
      },
      masterpieceName: {
        color: 'white',
        fontFamily: Fonts.Ogg,
        fontSize: 16,
        marginLeft: 10,
        marginBottom: 10,
        flexWrap: 'wrap',
      }
    })
    return (
      <ScrollView style={style.container}>
        <Header />
        <View style={style.section}>
          <Text style={style.sectionTitle}>Artists</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={style.wrapper}>
              <TouchableOpacity onPress={this.artistPressed}>
                <ImageBackground imageStyle={{ borderRadius: 10 }} style={style.image} source={require('../../assets/img/artists/rembrandt.jpg')}>
                  <Text style={style.artistName}>Rembrant Peale</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.artistPressed}>
                <ImageBackground imageStyle={{ borderRadius: 10 }} style={style.image} source={require('../../assets/img/artists/van-gogh.jpg')}>
                  <Text style={style.artistName}>Van Gogh</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.artistPressed}>
                <ImageBackground imageStyle={{ borderRadius: 10 }} style={style.image} source={require('../../assets/img/artists/davinci.jpg')}>
                  <Text style={style.artistName}>Da Vinci</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <View style={style.section}>
          <Text style={style.sectionTitle}>Masterpieces</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={style.wrapper}>
              <TouchableOpacity onPress={this.artistPressed}>
                <ImageBackground imageStyle={{ borderRadius: 10 }} style={style.image} source={require('../../assets/img/masterpieces/washington.jpg')}>
                  <Text style={style.artistName}>George Washington</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.artistPressed}>
                <ImageBackground imageStyle={{ borderRadius: 10 }} style={style.image} source={require('../../assets/img/masterpieces/the-sisters.jpg')}>
                  <Text style={style.artistName}>The Sisters</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.artistPressed}>
                <ImageBackground imageStyle={{ borderRadius: 10 }} style={style.image} source={require('../../assets/img/masterpieces/mona-lisa.jpeg')}>
                  <Text style={style.artistName}>Mona Lisa</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <View style={style.section}>
          <Text style={style.sectionTitle}>Movements</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={style.wrapper}>
              <TouchableOpacity onPress={this.artistPressed}>
                <ImageBackground imageStyle={{ borderRadius: 10 }} style={style.image} source={require('../../assets/img/movements/the-persistence-of-memory.jpg')}>
                  <Text style={style.masterpieceName}>Post - Impressionism</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.artistPressed}>
                <ImageBackground imageStyle={{ borderRadius: 10 }} style={style.image} source={require('../../assets/img/movements/the-scream.jpg')}>
                  <Text style={style.masterpieceName}>Expressionism</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.artistPressed}>
                <ImageBackground imageStyle={{ borderRadius: 10 }} style={style.image} source={require('../../assets/img/movements/the-starry-night.jpg')}>
                  <Text style={style.masterpieceName}>Surrealism</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    )
  }
}
