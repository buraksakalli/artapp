import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native'
import Header from '../Header';
import { Fonts } from '../../utils/Fonts';
import MenuIcon from '../MenuIcon';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { withNavigation } from 'react-navigation';


export default class MovementPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movementID: null
    }
  }

  componentDidMount() {
    const { navigation } = this.props;
    this.setState({
      movementID: navigation.getParam('itemId', null)
    })
  }

  render() {
    const style = StyleSheet.create({
      container: {
        paddingLeft: 10,
        paddingTop: 30,
        backgroundColor: "#F2EFE8"
      },
      title: {
        fontSize: 36,
        fontFamily: Fonts.Ogg,
        marginBottom: 10,
      },
      image: {
        marginRight: 10,
        marginBottom: 10,
        display: 'flex',
        justifyContent: 'flex-end',
        height: 160,
        width: 120,
        resizeMode: 'cover' // it's not necessary
      },
      paintingName: {
        color: 'white',
        fontFamily: Fonts.Ogg,
        fontSize: 18,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        flexWrap: 'wrap',
      }
    })
    return (
      <ScrollView style={style.container}>
        <Header />
        <MenuIcon />
        <Text style={style.title}>Movements</Text>
        <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          <TouchableOpacity>
            <ImageBackground imageStyle={{ borderRadius: 10 }} style={style.image} source={{ uri: 'https://artapp.buraksakalli.org/assets/img/masterpieces/still-life-vase-with-fifteen-sunflower.jpg' }}>
              <Text style={style.paintingName}>Test</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
            <ImageBackground imageStyle={{ borderRadius: 10 }} style={style.image} source={{ uri: 'https://artapp.buraksakalli.org/assets/img/masterpieces/still-life-vase-with-fifteen-sunflower.jpg' }}>
              <Text style={style.paintingName}>Test</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
            <ImageBackground imageStyle={{ borderRadius: 10 }} style={style.image} source={{ uri: 'https://artapp.buraksakalli.org/assets/img/masterpieces/still-life-vase-with-fifteen-sunflower.jpg' }}>
              <Text style={style.paintingName}>Test</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
            <ImageBackground imageStyle={{ borderRadius: 10 }} style={style.image} source={{ uri: 'https://artapp.buraksakalli.org/assets/img/masterpieces/still-life-vase-with-fifteen-sunflower.jpg' }}>
              <Text style={style.paintingName}>Test</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
            <ImageBackground imageStyle={{ borderRadius: 10 }} style={style.image} source={{ uri: 'https://artapp.buraksakalli.org/assets/img/masterpieces/still-life-vase-with-fifteen-sunflower.jpg' }}>
              <Text style={style.paintingName}>Test</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
            <ImageBackground imageStyle={{ borderRadius: 10 }} style={style.image} source={{ uri: 'https://artapp.buraksakalli.org/assets/img/masterpieces/still-life-vase-with-fifteen-sunflower.jpg' }}>
              <Text style={style.paintingName}>Test</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
            <ImageBackground imageStyle={{ borderRadius: 10 }} style={style.image} source={{ uri: 'https://artapp.buraksakalli.org/assets/img/masterpieces/still-life-vase-with-fifteen-sunflower.jpg' }}>
              <Text style={style.paintingName}>Test</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
            <ImageBackground imageStyle={{ borderRadius: 10 }} style={style.image} source={{ uri: 'https://artapp.buraksakalli.org/assets/img/masterpieces/still-life-vase-with-fifteen-sunflower.jpg' }}>
              <Text style={style.paintingName}>Test</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
            <ImageBackground imageStyle={{ borderRadius: 10 }} style={style.image} source={{ uri: 'https://artapp.buraksakalli.org/assets/img/masterpieces/still-life-vase-with-fifteen-sunflower.jpg' }}>
              <Text style={style.paintingName}>Test</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
            <ImageBackground imageStyle={{ borderRadius: 10 }} style={style.image} source={{ uri: 'https://artapp.buraksakalli.org/assets/img/masterpieces/still-life-vase-with-fifteen-sunflower.jpg' }}>
              <Text style={style.paintingName}>Test</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
            <ImageBackground imageStyle={{ borderRadius: 10 }} style={style.image} source={{ uri: 'https://artapp.buraksakalli.org/assets/img/masterpieces/still-life-vase-with-fifteen-sunflower.jpg' }}>
              <Text style={style.paintingName}>Test</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
            <ImageBackground imageStyle={{ borderRadius: 10 }} style={style.image} source={{ uri: 'https://artapp.buraksakalli.org/assets/img/masterpieces/still-life-vase-with-fifteen-sunflower.jpg' }}>
              <Text style={style.paintingName}>Test</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
            <ImageBackground imageStyle={{ borderRadius: 10 }} style={style.image} source={{ uri: 'https://artapp.buraksakalli.org/assets/img/masterpieces/still-life-vase-with-fifteen-sunflower.jpg' }}>
              <Text style={style.paintingName}>Test</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
            <ImageBackground imageStyle={{ borderRadius: 10 }} style={style.image} source={{ uri: 'https://artapp.buraksakalli.org/assets/img/masterpieces/still-life-vase-with-fifteen-sunflower.jpg' }}>
              <Text style={style.paintingName}>Test</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
            <ImageBackground imageStyle={{ borderRadius: 10 }} style={style.image} source={{ uri: 'https://artapp.buraksakalli.org/assets/img/masterpieces/still-life-vase-with-fifteen-sunflower.jpg' }}>
              <Text style={style.paintingName}>Test</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}
