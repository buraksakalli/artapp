import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, StatusBar, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import Screen from '../../src/utils/Screen'
import { Fonts } from '../Fonts';
import Header from '../Header';
import MenuIcon from '../MenuIcon';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { NavigationActions, withNavigation } from 'react-navigation';

class PaintingPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      paintingID: null
    }
  }

  componentDidMount() {
    const { navigation } = this.props;
    this.setState({
      paintingID: navigation.getParam('itemId', null)
    })
  }

  paintingPressed = (pictureURL) => {
    const { navigation } = this.props;
    navigation.push('FullscreenImagePage', {
      pictureURL: pictureURL
    })
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
        <MenuIcon />
        <Header />
        <Query pollInterval={500} query={gql`{painting(_id: "${this.state.paintingID}"){_id name date picture artist{name} genre location{country city museum} movement{name} dimensions{width height unit}}}`}>
          {({ loading, error, data }) => {
            if (loading) return (
              <View style={style.activity}>
                <ActivityIndicator size="large" color="#0000ff" />
              </View>
            );
            if (error) return (
              <View style={style.activity}>
                <Text>`Error! ${error.message}`</Text>
              </View>
            );
            const { painting } = data;
            return (
              <View>
                <TouchableOpacity onPress={() => {this.paintingPressed(painting.picture)}}>
                  <Image style={style.image} source={{ uri: painting.picture }} />
                </TouchableOpacity>
                <View style={style.header}>
                  <Text style={style.headerInfo}>{new Date(parseInt(painting.date)).getFullYear()}</Text>
                  <Text style={style.paintingName}>{painting.name}</Text>
                  <Text style={style.headerInfo}>{painting.artist.name}</Text>
                </View>
                <ScrollView>
                  <View style={style.content}>
                    {painting.genre && <Text style={style.contentInfo}>Genre: {painting.genre}</Text>}
                    {painting.genre && <Text style={style.contentInfo}>Location: {painting.location.museum}, {painting.location.city}, {painting.location.country}</Text>}
                    {painting.movement.name && <Text style={style.contentInfo}>Style: {painting.movement.name}</Text>}
                    {painting.dimensions && <Text style={style.contentInfo}>Dimensions: {painting.dimensions.width}x{painting.dimensions.height} {painting.dimensions.unit}</Text>}
                  </View>
                </ScrollView>
              </View>
            );
          }}
        </Query>
      </View>
    )
  }
}

export default withNavigation(PaintingPage)