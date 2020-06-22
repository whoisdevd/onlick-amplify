/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPhoto = /* GraphQL */ `
  query GetPhoto($id: ID!) {
    getPhoto(id: $id) {
      id
      image
      description
      exif {
        id
        photoID
        camera
        focalLength
        aperture
        shutter
        iso
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          photoID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPhotos = /* GraphQL */ `
  query ListPhotos(
    $filter: ModelPhotoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPhotos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        image
        description
        exif {
          id
          photoID
          camera
          focalLength
          aperture
          shutter
          iso
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getExif = /* GraphQL */ `
  query GetExif($id: ID!) {
    getExif(id: $id) {
      id
      photoID
      camera
      focalLength
      aperture
      shutter
      iso
      createdAt
      updatedAt
    }
  }
`;
export const listExifs = /* GraphQL */ `
  query ListExifs(
    $filter: ModelExifFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExifs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        photoID
        camera
        focalLength
        aperture
        shutter
        iso
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      photoID
      content
      createdAt
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        photoID
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
