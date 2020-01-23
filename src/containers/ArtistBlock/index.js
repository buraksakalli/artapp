import React, { Component } from 'react'
import Loading from 'components/atoms/loading';
import Error from 'components/atoms/error';
import { Query } from 'react-apollo';
import ContentCard from 'components/molecules/cards/ContentCard';
import { withNavigation } from 'react-navigation';
import { getAllArtists } from 'utils/Queries';

export class ArtistBlock extends Component {
  render() {
    const onPressed = (id) => {
      const { navigation } = this.props;
      navigation.push('ArtistPage', {
        itemId: id
      })
    }
    return (
      <Query
        pollInterval={500}
        query={getAllArtists}>
        {({ loading, error, data }) => {
          if (loading) return <Loading />
          if (error) return <Error errorMessage={error.message} />
          return (
            data.artists.map(e => {
              const bornDate = new Date(parseInt(e.born.date)).getFullYear()
              const diedDate = new Date(parseInt(e.died.date)).getFullYear()
              const date = `${bornDate} - ${diedDate}`;
              return <ContentCard
                date={date}
                title={e.name}
                pictureUrl={e.picture}
                onPress={() => { onPressed(e._id) }}
              />
            })
          );
        }}
      </Query>
    )
  }
}

export default withNavigation(ArtistBlock)