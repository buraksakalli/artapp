import React, { Component } from 'react'
import Loading from 'components/atoms/loading';
import Error from 'components/atoms/error';
import { Query } from 'react-apollo';
import ContentCard from 'components/molecules/cards/ContentCard';
import { withNavigation } from 'react-navigation';
import { getAllMovements } from 'utils/Queries';

export class MovementBlock extends Component {
  render() {
    const onPressed = (id) => {
      const { navigation } = this.props;
      navigation.push('MovementPage', {
        itemId: id
      })
    }
    return (
      <Query
        pollInterval={500}
        query={getAllMovements}>
        {({ loading, error, data }) => {
          if (loading) return <Loading />
          if (error) return <Error errorMessage={error.message} />
          return (
            data.movements.map(e => {
              return <ContentCard
                date={null}
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

export default withNavigation(MovementBlock)