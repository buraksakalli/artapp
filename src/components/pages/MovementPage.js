import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import Header from 'components/atoms/header';
import { Fonts } from 'utils/Fonts';
import MenuIcon from 'components/molecules/menuIcon';
import { Query } from 'react-apollo';
import Screen from 'utils/Screen';
import MovementPicture from 'containers/MovementPicture';
import PageTitles from 'components/molecules/PageTitles';
import { Text as ArticleText } from 'components/atoms/Text';
import MovementPageBlock from 'containers/MovementPageBlock';
import Loading from 'components/atoms/loading';
import Error from 'components/atoms/error';
import {getMovement} from 'utils/Queries';

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

  onCompleted = (artistCount) => {
    this.setState({
      artistCounter: artistCount
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
      image: {
        marginBottom: 10,
        display: 'flex',
        height: Dimensions.height,
        width: Dimensions.width,
        resizeMode: 'cover' // it's not necessary
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
          <Query pollInterval={500} query={getMovement(this.state.movementID)}>
            {({ loading, error, data }) => {
              if (loading) return <Loading />;
              if (error) return <Error errorMessage={error.message} />
              const { movement } = data;

              return (
                <View>
                  <View style={style.header}>
                    <PageTitles title={movement.name} subtitle="Art Movement" />
                    <MovementPicture movementId={this.state.movementID} />
                  </View>
                  <ArticleText variant="article">{movement.description}</ArticleText>
                  <Text style={style.artistCounter}>{this.state.artistCounter} ARTISTS</Text>
                </View>
              );
            }}
          </Query>
          <View style={style.section}>
            <View style={style.wrapper}>
              <MovementPageBlock movementId={this.state.movementID} onCompleted={this.onCompleted} />
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}