import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Fonts } from '../Fonts'
import Header from '../Header';
import ArtistPage from './ArtistPage';

export default class SplashScreen extends Component {
  componentDidMount() {
    const { navigate } = this.props.navigation;
    setTimeout(() => {
      navigate('MainPage')
    }, 2000);
  }

  render() {
    const style = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#F2EFE8',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      title: {
        fontFamily: Fonts.Ogg,
        fontSize: 40,
      }
    })
    return (
      <View style={style.container}>
        <Header />
        <Text style={style.title}>ArtApp</Text>
      </View>
    )
  }
}
