import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import { withNavigation } from 'react-navigation';
import Screen from '../utils/Screen';
import { Fonts } from '../utils/Fonts';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

class ArtistContent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      paintingCount: 0
    }
  }

  paintingPressed = (id) => {
    const { navigation } = this.props;
    navigation.push('PaintingPage', {
      itemId: id
    })
  }

  setPaitingCount = (count) => {
    this.setState({
      paintingCount: count
    })
  }

  render() {
    const artist = this.props.artist;
    const { paintingCount } = this.state;
    var date = {
      bornDate: new Date(parseInt(artist.born.date)).getFullYear(),
      diedDate: new Date(parseInt(artist.died.date)).getFullYear()
    }
    const dimension = Screen.getDimension();
    const imgWidth = Math.round(dimension.width * .3333);
    const imgHeight = Math.round(dimension.height * .2225);
    const style = StyleSheet.create({
      content: {
        margin: 30
      },
      artistTitle: {
        fontSize: 45,
        lineHeight: 50,
        fontFamily: Fonts.Ogg,
        textTransform: 'uppercase',
        textAlign: 'right',
      },
      artistDescription: {
        fontSize: 20,
        fontFamily: Fonts.Ogg,
        marginTop: 30,
        lineHeight: 30
      },
      paintingsTitle: {
        fontSize: 14,
        fontFamily: Fonts.Maison,
        marginTop: 30,
      },
      paintingsWrapper: {
        fontFamily: Fonts.Ogg,
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 30
      },
      paintingName: {
        fontSize: 14,
        fontFamily: Fonts.Ogg
      },
      paintingDate: {
        marginTop: 10,
        fontSize: 12,
        fontFamily: Fonts.Ogg
      },
      paintings: {
        marginLeft: 30,
        width: imgWidth,
      },
      paintingsImage: {
        height: 160
      }
    });

    return (
      <View>
        <View style={style.content}>
          <Text style={style.artistTitle}>{artist.name}</Text>
          <Text style={style.artistTitle}>{date.bornDate}-{date.diedDate}</Text>
          <Text style={style.artistDescription}>{artist.description}</Text>
          <View style={style.paintingsTitle}>
            <Text>PAINTINGS GALLERY</Text>
            <Text>IMAGES {paintingCount}</Text>
          </View>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={style.paintingsWrapper}>
            <Query pollInterval={500} query={gql`{paintings(artistId:"${artist._id}"){_id name date picture}}`} onCompleted={data => this.setState({ paintingCount: data.paintings.length })}>
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
                  console.log(data)
                return (
                  <FlatList
                    horizontal={true}
                    keyExtractor={data._id}
                    data={data.paintings}
                    renderItem={({ item }) => (
                      <TouchableOpacity onPress={() => { this.paintingPressed(item._id) }}>
                        <View style={style.paintings}>
                          <Image style={style.paintingsImage} source={{ uri: item.picture }} />
                          <Text style={style.paintingDate}>
                            {new Date(parseInt(item.date)).getFullYear()}
                          </Text>
                          <Text style={style.paintingName}>{item.name}</Text>
                        </View>
                      </TouchableOpacity>
                    )}
                  />
                );
              }}
            </Query>
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default withNavigation(ArtistContent)