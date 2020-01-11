import React, { Component } from 'react'
import { FlatList, View, ScrollView, StyleSheet } from 'react-native'
import { Query } from 'react-apollo';
import BlockCard from '../../molecules/cards/BlockCard';
import { withNavigation } from 'react-navigation';

export class Block extends Component {
  render() {

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

    itemPressed = (item, id) => {
      if (item == "artists") artistPressed(id);
      if (item == "paintings") paintingPressed(id);
      if (item == "movements") movementPressed(id);
    }

    const { onCompleted, query, onPress } = this.props;
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={style.wrapper}>
          <Query pollInterval={500} query={query.query} onCompleted={onCompleted}>
            {({ loading, error, data }) => {
              if (loading) return null;
              if (error) return null;

              return (
                <FlatList
                  horizontal={true}
                  keyExtractor={data._id}
                  data={data[query.fieldName]}
                  renderItem={({ item }) => (
                    <BlockCard title={item.name} onPress={itemPressed.bind(this, query.fieldName, item._id)} picture={item.picture} />
                  )}
                />
              );
            }}
          </Query>
        </View>
      </ScrollView>
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
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
  }
})

export default withNavigation(Block)