import gql from 'graphql-tag';

export const getAllPaintings = gql`{
  paintings {
    _id 
    name 
    picture
    date
  }
}`
export const getAllMovements = gql`{
  movements {
    _id 
    name 
    picture
  }
}`

export const getAllArtists = gql`{
  artists 
  {
    _id 
    name 
    picture
    born {
      date
    }
    died {
      date
    }
  }
}`

export const getMovementPicture = (movementId) => {
  return gql`{
    paintings(movementId: "${movementId}")
    { 
      picture 
    }
  }`
};

export const getArtist = (artistId) => {
  return gql`{
    artist(_id: "${artistId}")
    {
      _id 
      name 
      picture 
      born {
        date
      } 
      died
      {
        date
      } 
      description 
    }
  }`
};

export const getArtistsByMovement = (movementId) => {
  return gql`{
    artists(movementId: "${movementId}")
    {
      _id 
      name 
      picture 
      born {
        date
      } 
      died{
        date
      } 
      description 
    }
  }`
};

export const getPainting = (paintingId) => {
  return gql`{
    painting(_id: "${paintingId}")
    {
      _id 
      name 
      date 
      picture 
      artist {
        name
      } 
      genre 
      location {
        country 
        city 
        museum
      } 
      movement {
        name
      } 
      dimensions {
        width 
        height 
        unit
      }
    }
  }`
};

export const getPaintingsByArtist = (artistId) => {
  return gql`{
    paintings(artistId:"${artistId}")
    {
      _id
      name
      date
      picture
    }
  }`
};

export const getMovement = (movementID) => {
  return gql`{
    movement(_id: "${movementID}")
    { 
      name 
      description 
    }
  }`
};