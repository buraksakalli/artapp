import React, { Component } from 'react'
import Loading from 'components/atoms/loading';
import Error from 'components/atoms/error';
import { Query } from 'react-apollo';
import ContentCard from 'components/molecules/cards/ContentCard';
import { withNavigation } from 'react-navigation';

export class GeneralBlock extends Component {
  render() {
    const onPressed = (id) => {
      const { navigation, targetPage } = this.props;
      navigation.push(targetPage, {
        itemId: id
      })
    }
    return (
      <Query pollInterval={500} query={this.props.query} >
        {({ loading, error, data }) => {
          if (loading) return <Loading />
          if (error) return <Error errorMessage={error.message} />
          const fieldName = Object.entries(data)[0][0];

          return (
            data[`${fieldName}`].map(e => {
              let date;
              if (fieldName == "artists") {
                const bornDate = new Date(parseInt(e.born.date)).getFullYear()
                const diedDate = new Date(parseInt(e.died.date)).getFullYear()
                date = `${bornDate} - ${diedDate}`;
              }
              if (fieldName == "paintings") date = new Date(parseInt(e.date)).getFullYear()
              if (fieldName == "movements") date = null;

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

export default withNavigation(GeneralBlock)