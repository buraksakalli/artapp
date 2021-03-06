import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import Header from 'components/atoms/header';
import { Fonts } from 'utils/Fonts';
import Screen from 'utils/Screen';
import Content from 'containers/ArtistContent';
import MenuIcon from 'components/molecules/menuIcon';
import { Query } from 'react-apollo';
import Loading from 'components/atoms/loading';
import Error from 'components/atoms/error';
import { getArtist } from 'utils/Queries';


export default class ArtistPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      itemId: null,
    }
  }

  componentDidMount() {
    const { navigation } = this.props;
    this.setState({
      itemId: navigation.getParam('itemId', null)
    })
  }

  render() {
    // Getting screen dimensions
    const dimension = Screen.getDimension();

    const style = StyleSheet.create({
      container: {
        width: dimension.width,
        height: dimension.height,
        backgroundColor: '#F2EFE8'
      },
      bg: {
        width: dimension.width,
        height: dimension.height,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end'
      },
      info: {
        paddingLeft: 30,
        paddingBottom: 30,
        paddingRight: 40,
      },
      year: {
        fontFamily: Fonts.OggItalic,
        fontSize: 16,
        color: '#EEEEEE',
      },
      name: {
        fontFamily: Fonts.Ogg,
        fontSize: 45,
        color: '#EEEEEE',
      },
    });
    return (
      <View>
        <MenuIcon />
        <View style={style.container}>
          <Header />
          <Query pollInterval={500} query={getArtist(this.state.itemId)}>
            {({ loading, error, data }) => {
              if (loading) return <Loading />
              if (error) return <Error errorMessage={error.message} />

              const { artist } = data;

              var date = {
                bornDate: new Date(parseInt(artist.born.date)).getFullYear(),
                diedDate: new Date(parseInt(artist.died.date)).getFullYear()
              }

              return (
                <ScrollView showsVerticalScrollIndicator={false} onScroll={this.scroll}>
                  <ImageBackground style={style.bg} source={{ uri: artist.picture }}>
                    <View style={style.info}>
                      <TouchableOpacity onPress={this.paintingPressed}>
                        <Text style={style.year}>{date.bornDate}-{date.diedDate}</Text>
                      </TouchableOpacity>
                      <Text style={style.name}>{artist.name}</Text>
                    </View>
                  </ImageBackground>
                  <Content artist={artist} />
                </ScrollView>
              );
            }}
          </Query>
        </View>

      </View>
    )
  }
}