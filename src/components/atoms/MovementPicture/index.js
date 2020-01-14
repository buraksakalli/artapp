import React, { Component } from 'react'
import { Text, View, ImageBackground, ActivityIndicator, StyleSheet } from 'react-native'
import { Query } from 'react-apollo';
import {getMovementPicture} from 'utils/Queries';

export class MovementPicture extends Component {
  render() {
    const {movementId} = this.props;

    return (
      <View style={styles.container}>
        <Query pollInterval={500} query={getMovementPicture(movementId).query}>
        {({ loading, error, data }) => {
          if (loading) {
            return (
              <View style={styles.activity}>
                <ActivityIndicator size="large" color="#0000ff" />
              </View>
            )
          }
          if (error) return (
            <View style={styles.activity}>
              <Text>`Error! ${error.message}`</Text>
            </View>
          );
          return (
            <View style={styles.picture}>
              <ImageBackground style={{width: "100%", height: "100%"}} source={{ uri: data.paintings[Math.floor(Math.random() * data.paintings.length)].picture }} />
            </View>
          );
        }}
      </Query>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
  },
  picture: {
    flex: 1,
  }
});

export default MovementPicture
