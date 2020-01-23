import React, { Component } from 'react'
import Loading from 'components/atoms/loading';
import Error from 'components/atoms/error';
import { Query } from 'react-apollo';
import { getArtistsByMovement } from 'utils/Queries';
import ContentCard from 'components/molecules/cards/ContentCard';
import { withNavigation } from 'react-navigation';

export class MovementPageBlock extends Component {
  render() {
    const { movementId, onCompleted } = this.props;
    const artistPressed = (id) => {
      const { navigation } = this.props;
      navigation.push('ArtistPage', {
        itemId: id
      })
    }
    return (
      <Query
        pollInterval={500}
        query={getArtistsByMovement(movementId)}
        onCompleted={data => onCompleted(data.artists.length)}>
        {({ loading, error, data }) => {
          if (loading) return <Loading />
          if (error) return <Error errorMessage={error.message} />
          return (
            data.artists.map(artist => {
              const bornDate = new Date(parseInt(artist.born.date)).getFullYear()
              const diedDate = new Date(parseInt(artist.died.date)).getFullYear()
              const date = `${bornDate} - ${diedDate}`;
              return <ContentCard
                date={date}
                title={artist.name}
                pictureUrl={artist.picture}
                onPress={() => { artistPressed(artist._id) }}
              />
            })
          );
        }}
      </Query>
    )
  }
}

export default withNavigation(MovementPageBlock)