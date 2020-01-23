import React, { Component } from 'react'
import { Query } from 'react-apollo';
import { getMovementPicture } from 'utils/Queries';
import Loading from 'components/atoms/loading';
import Error from 'components/atoms/error';
import MovementComponent from 'components/atoms/MovementPicture';

class MovementPicture extends Component {
  render() {
    const { movementId } = this.props;
    return (
      <Query pollInterval={500} query={getMovementPicture(movementId)}>
        {({ loading, error, data }) => {
          if (loading) {
            return (
              <Loading />
            )
          }
          if (error) return (
            <Error errorMessage={error.message} />
          );
          
          let imageURL;
          if(data.paintings.length > 0){
            imageURL = data.paintings[Math.floor(Math.random() * data.paintings.length)].picture;
          } else imageURL = null;
          
          return (
            <MovementComponent uri={imageURL} />
          );
        }}
      </Query>
    )
  }
}

export default MovementPicture