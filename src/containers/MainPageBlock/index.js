import React, { Component } from 'react'
import { View, FlatList, } from 'react-native'
import { Query } from 'react-apollo';
import BlockCard from 'components/molecules/cards/BlockCard';
import { withNavigation } from 'react-navigation';

export class MainPageBlock extends Component {
  render() {
    const artistPressed = (id) => {
      const { navigation } = this.props;
      navigation.push('ArtistPage', {
        itemId: id
      })
    }

    const paintingPressed = (id) => {
      const { navigation } = this.props;
      navigation.push('PaintingPage', {
        itemId: id
      })
    }

    const movementPressed = (id) => {
      const { navigation } = this.props;
      navigation.push('MovementPage', {
        itemId: id
      })
    }

    const itemPressed = (item, id) => {
      item == "artists" && artistPressed(id);
      item == "paintings" && paintingPressed(id);
      item == "movements" && movementPressed(id);
    }

    const { onCompleted, query } = this.props;

    return (
      <View>
        <Query pollInterval={500} query={query} onCompleted={onCompleted}>
          {({ loading, error, data }) => {
            if (loading) return null;
            if (error) return null;
            const fieldName = Object.entries(data)[0][0];
            return (
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={data._id}
                data={data[fieldName]}
                renderItem={({ item }) => (
                  <BlockCard title={item.name} onPress={itemPressed.bind(this, fieldName, item._id)} picture={item.picture} />
                )}
              />
            );
          }}
        </Query>
      </View>
    )
  }
}

export default withNavigation(MainPageBlock)