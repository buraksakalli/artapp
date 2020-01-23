import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import Screen from 'utils/Screen'
import { Fonts } from 'utils/Fonts';
import Header from 'components/atoms/header';
import MenuIcon from 'components/molecules/menuIcon';
import { Query } from 'react-apollo';
import { withNavigation } from 'react-navigation';
import Loading from 'components/atoms/loading';
import Error from 'components/atoms/error';
import { getPainting } from 'utils/Queries';

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
        <Query pollInterval={500} query={getPainting(this.state.paintingID)}>
          {({ loading, error, data }) => {
            if (loading) return <Loading />
            if (error) return <Error errorMessage={error.message} />
            const { painting } = data;
            return (
              <ScrollView>
                <View>
                  <TouchableOpacity onPress={() => { this.paintingPressed(painting.picture) }}>
                    <Image style={style.image} source={{ uri: painting.picture }} />
                  </TouchableOpacity>

                  <View style={style.header}>
                    <Text style={style.headerInfo}>{new Date(parseInt(painting.date)).getFullYear()}</Text>
                    <Text style={style.paintingName}>{painting.name}</Text>
                    <Text style={style.headerInfo}>{painting.artist.name}</Text>
                  </View>

                  <View style={style.content}>
                    {painting.genre && <Text style={style.contentInfo}>Genre: {painting.genre}</Text>}
                    {painting.genre && <Text style={style.contentInfo}>Location: {painting.location.museum}, {painting.location.city}, {painting.location.country}</Text>}
                    {painting.movement.name && <Text style={style.contentInfo}>Style: {painting.movement.name}</Text>}
                    {painting.dimensions && <Text style={style.contentInfo}>Dimensions: {painting.dimensions.width}x{painting.dimensions.height} {painting.dimensions.unit}</Text>}
                  </View>
                </View>
              </ScrollView>
            );
          }}
        </Query>
      </View >

    )
  }
}

export default withNavigation(PaintingPage)