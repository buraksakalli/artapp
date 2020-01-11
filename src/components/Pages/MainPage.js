import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import Header from '../Header';
import Title from '../atoms/title';
import Block from '../organisms/Block';
import { getAllArtists, getAllMovements, getAllPaintings } from '../../utils/Queries';

class MainPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      loading: {
        artist: true,
        masterpiece: true,
        movement: true
      },
      loaded: false
    }
  }

  onCompleted = (loaded) => {
    const { artist, masterpiece, movement } = this.state.loading;
    this.setState({
      loading: {
        ...this.state.loading,
        [loaded]: false
      }
    });
    if (artist && masterpiece && movement) {
      this.setState({
        loaded: true
      })
    }
  }

  render() {
    return (
      <ScrollView style={style.container}>
        <Header />
        <View style={style.section}>
          <Title variant="section">Artists</Title>
          <Block query={getAllArtists} onCompleted={this.onCompleted.bind(this, 'artist')} />
        </View>
        <View style={style.section}>
          <Title variant="section">Masterpieces</Title>
          <Block query={getAllPaintings} onCompleted={this.onCompleted.bind(this, 'masterpiece')} />
        </View>
        <View style={style.section}>
          <Title variant="section">Movements</Title>
          <Block query={getAllMovements} onCompleted={this.onCompleted.bind(this, 'movement')} />
        </View>
      </ScrollView >
    )
  }
}

const style = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingTop: 20,
    backgroundColor: "#F2EFE8"
  },
  section: {
    marginBottom: 30,
  }
})

export default MainPage;