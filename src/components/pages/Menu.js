import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { Fonts } from 'utils/Fonts';
import Screen from 'utils/Screen';
import Header from 'components/atoms/header';
import { withNavigation } from 'react-navigation';
import { getAllArtists, getAllPaintings, getAllMovements } from 'utils/Queries';

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      item: ''
    })
  }

  menuItemPressed = (target) => {
    let targetPage, query;
    const { navigation } = this.props;
    if (target == "Artists") {
      targetPage = "ArtistPage";
      query = getAllArtists;
    }

    else if (target == "Masterpieces") {
      targetPage = "PaintingPage";
      query = getAllPaintings;
    }
    else if (target == "Movements") {
      targetPage = "MovementPage";
      query = getAllMovements;
    }
    if (query != null) {
      navigation.push("General", {
        targetPage: targetPage,
        query: query,
        title: target
      })
    } else {
      navigation.push(target)
    }
  }

  closeButtonPressed = () => {
    const { navigation } = this.props;
    navigation.goBack();
  }

  render() {
    const dimension = Screen.getDimension();
    const style = StyleSheet.create({
      container: {
        width: dimension.width,
        height: dimension.height,
        display: 'flex',
        flexDirection: 'column',
      },
      closeButton: {
        alignSelf: 'flex-end',
        fontSize: 22,
        marginRight: 20,
        marginTop: 20,
      },
      menu: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      },
      menuItem: {
        fontFamily: Fonts.Ogg,
        fontSize: 50,
      }
    });
    return (
      <View style={style.container}>
        <Header />
        <TouchableOpacity onPress={this.closeButtonPressed}>
          <Text style={style.closeButton}>✕</Text>
        </TouchableOpacity>
        <View style={style.menu}>
          <TouchableOpacity onPress={() => { this.menuItemPressed('MainPage') }}><Text style={style.menuItem}>Home</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => { this.menuItemPressed('Artists') }}><Text style={style.menuItem}>Artists</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => { this.menuItemPressed('Masterpieces') }}><Text style={style.menuItem}>Masterpieces</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => { this.menuItemPressed('Movements') }}><Text style={style.menuItem}>Art Movements</Text></TouchableOpacity>
          <TouchableOpacity><Text style={style.menuItem}>Contact</Text></TouchableOpacity>
        </View>
      </View>
    )
  }
}
export default withNavigation(Menu)