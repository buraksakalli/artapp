import React, { Component } from 'react'
import Loading from 'components/atoms/loading';
import Error from 'components/atoms/error';
import { Query } from 'react-apollo';
import { getArtistsByMovement } from 'utils/Queries';
import ContentCard from 'components/molecules/cards/ContentCard';
import { withNavigation } from 'react-navigation';

export class Block extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       fieldName: null
    }
  }
  render() {
    const { onCompleted, query, targetPage } = this.props;
    const onPressed = (id) => {
      const { navigation } = this.props;
      navigation.push(targetPage, {
        itemId: id
      })
    }
    return (
      <Query
        pollInterval={500}
        query={query}
        onCompleted={data => onCompleted(data.artists.length)}>
        {({ loading, error, data }) => {
          if (loading) return <Loading />
          if (error) return <Error errorMessage={error.message} />
          const fieldName = Object.entries(data)[0][0];
          this.setState({fieldName})
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

export default withNavigation(Block)