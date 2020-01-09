import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, ImageBackground, TouchableOpacity, BackHandler, FlatList, ActivityIndicator } from 'react-native'
import Header from '../Header';
import { Fonts } from '../../utils/Fonts';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

export default class MainPage extends Component {
  artistPressed = (id) => {
    const { navigation } = this.props;
    navigation.push('ArtistPage', {
      itemId: id
    })
  }

  paintingPressed = (id) => {
    const { navigation } = this.props;
    navigation.push('PaintingPage', {
      itemId: id
    })
  }

  movementPressed = (id) => {
    const { navigation } = this.props;
    navigation.push('MovementPage', {
      itemId: id
    })
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
              <Query pollInterval={500} query={gql`{artists {_id name picture } } `}>
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
                        <TouchableOpacity onPress={() => { this.artistPressed(item._id) }}>
                          <ImageBackground imageStyle={{ borderRadius: 10 }} style={style.image} source={{ uri: item.picture }}>
                            <Text style={style.artistName}>{item.name}</Text>
                          </ImageBackground>
                        </TouchableOpacity>
                      )}
                    />
                  );
                }}
              </Query>
            </View>
          </ScrollView>
        </View>
        <View style={style.section}>
          <Text style={style.sectionTitle}>Masterpieces</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={style.wrapper}>
              <Query pollInterval={500} query={gql`{paintings {_id name picture } } `}>
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
                    <FlatList horizontal={true}
                      keyExtractor={data._id}
                      data={data.paintings}
                      renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => { this.paintingPressed(item._id) }}>
                          <ImageBackground imageStyle={{ borderRadius: 10 }} style={style.image} source={{ uri: item.picture }}>
                            <Text style={style.artistName}>{item.name}</Text>
                          </ImageBackground>
                        </TouchableOpacity>
                      )}
                    />
                  );
                }}
              </Query>
            </View>
          </ScrollView>
        </View>
        <View style={style.section}>
          <Text style={style.sectionTitle}>Movements</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={style.wrapper}>
              <Query pollInterval={500} query={gql`{movements {_id name picture } } `}>
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
                      data={data.movements}
                      renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => { this.movementPressed(item._id) }}>
                          <ImageBackground imageStyle={{ borderRadius: 10 }} style={style.image} source={{ uri: item.picture }}>
                            <Text style={style.artistName}>{item.name}</Text>
                          </ImageBackground>
                        </TouchableOpacity>
                      )}
                    />
                  );
                }}
              </Query>
            </View>
          </ScrollView>
        </View>
      </ScrollView >
    )
  }
}
