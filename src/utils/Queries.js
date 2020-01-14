import gql from 'graphql-tag';

export const getAllPaintings = { query: gql`{paintings {_id name picture } } `, fieldName: "paintings" }
export const getAllMovements = { query: gql`{movements {_id name picture } } `, fieldName: "movements" }
export const getAllArtists = { query: gql`{artists {_id name picture } } `, fieldName: "artists" }
export const getMovementPicture = (movementId) => {
  return {
    query: gql`{paintings(movementId: "${movementId}"){ picture }}`,
    fieldName: "paintings"
  }
} ;
