import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, ImageBackground, ActivityIndicator, FlatList, Image } from 'react-native'
import Header from '../Header';
import { Fonts } from '../../utils/Fonts';
import MenuIcon from '../MenuIcon';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { withNavigation } from 'react-navigation';
import Screen from '../../utils/Screen';

export default class MovementPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movementID: null,
      artistCounter: null
    }
  }

  componentDidMount() {
    const { navigation } = this.props;
    this.setState({
      movementID: navigation.getParam('itemId', null)
    })
  }

  artistPressed = (id) => {
    const { navigation } = this.props;
    navigation.push('ArtistPage', {
      itemId: id
    })
  }

  render() {
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
      title: {
        fontSize: 38,
        fontFamily: Fonts.Ogg,
        textAlign: 'center'
      },
      image: {
        marginBottom: 10,
        display: 'flex',
        height: Dimensions.height,
        width: Dimensions.width,
        resizeMode: 'cover' // it's not necessary
      },
      subtitle: {
        textAlign: 'center',
        fontFamily: Fonts.Ogg,
        fontSize: 24,
        marginBottom: 20
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

    return (
      <View>
        <MenuIcon />
        <Header />
        <ScrollView style={style.container}>
          <Query pollInterval={500} query={gql`{movement(_id: "${this.state.movementID}"){ name description }}`}>
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
              const { movement } = data;
              return (
                <View>
                  <View style={style.header}>
                    <Text style={style.title}>{movement.name}</Text>
                    <Text style={style.subtitle}>Art Movement</Text>
                    <Query pollInterval={500} query={gql`{paintings(movementId: "${this.state.movementID}"){ picture }}`}>
                      {({ loading, error, data }) => {
                        if (loading) {
                          return (
                            <View style={style.activity}>
                              <ActivityIndicator size="large" color="#0000ff" />
                            </View>
                          )
                        }
                        if (error) return (
                          <View style={style.activity}>
                            <Text>`Error! ${error.message}`</Text>
                          </View>
                        );
                        return (
                          <View style={style.picture}>
                            <ImageBackground style={{width: "100%", height: "100%"}} source={{ uri: data.paintings[Math.floor(Math.random() * data.paintings.length)].picture }} />
                          </View>
                        );
                      }}
                    </Query>
                  </View>
                  <Text style={style.sectionDescription}>{movement.description}</Text>
                  <Text style={style.artistCounter}>{this.state.artistCounter} ARTISTS</Text>
                </View>
              );
            }}
          </Query>
          <View style={style.section}>
            <View style={style.wrapper}>
              <Query pollInterval={500} query={gql`{artists(movementId: "${this.state.movementID}"){_id name picture born{date} died{date} description }}`} onCompleted={data => this.setState({ artistCounter: data.artists.length })}>
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

                  return (
                    <FlatList
                      horizontal={true}
                      keyExtractor={data._id}
                      data={data.artists}
                      renderItem={({ item }) => (
                        <TouchableOpacity style={style.artist} onPress={() => { this.artistPressed(item._id) }}>
                          <ImageBackground style={style.image} source={{ uri: item.picture }} />
                          <Text style={style.artistDate}>{new Date(parseInt(item.born.date)).getFullYear()} - {new Date(parseInt(item.died.date)).getFullYear()}</Text>
                          <Text style={style.artistName}>{item.name}</Text>
                        </TouchableOpacity>
                      )}
                    />
                  );
                }}
              </Query>

            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}
