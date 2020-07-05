/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      photos {
        items {
          id
          userId
          image
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      friends {
        items {
          id
          userId
          friendId
          createdAt
          updatedAt
        }
        nextToken
      }
      requests {
        items {
          id
          userId
          senderId
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        photos {
          nextToken
        }
        friends {
          nextToken
        }
        requests {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFriendRequest = /* GraphQL */ `
  query GetFriendRequest($id: ID!) {
    getFriendRequest(id: $id) {
      id
      userId
      senderId
      user {
        id
        name
        email
        photos {
          nextToken
        }
        friends {
          nextToken
        }
        requests {
          nextToken
        }
        createdAt
        updatedAt
      }
      sender {
        id
        name
        email
        photos {
          nextToken
        }
        friends {
          nextToken
        }
        requests {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listFriendRequests = /* GraphQL */ `
  query ListFriendRequests(
    $filter: ModelFriendRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFriendRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        senderId
        user {
          id
          name
          email
          createdAt
          updatedAt
        }
        sender {
          id
          name
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPhoto = /* GraphQL */ `
  query GetPhoto($id: ID!) {
    getPhoto(id: $id) {
      id
      userId
      image
      description
      exif {
        id
        photoId
        camera
        focalLength
        aperture
        shutter
        iso
        photo {
          id
          userId
          image
          description
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      user {
        id
        name
        email
        photos {
          nextToken
        }
        friends {
          nextToken
        }
        requests {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          photoId
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
        userId
        image
        description
        exif {
          id
          photoId
          camera
          focalLength
          aperture
          shutter
          iso
          createdAt
          updatedAt
        }
        user {
          id
          name
          email
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
      photoId
      camera
      focalLength
      aperture
      shutter
      iso
      photo {
        id
        userId
        image
        description
        exif {
          id
          photoId
          camera
          focalLength
          aperture
          shutter
          iso
          createdAt
          updatedAt
        }
        user {
          id
          name
          email
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
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
        photoId
        camera
        focalLength
        aperture
        shutter
        iso
        photo {
          id
          userId
          image
          description
          createdAt
          updatedAt
        }
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
      photoId
      content
      photo {
        id
        userId
        image
        description
        exif {
          id
          photoId
          camera
          focalLength
          aperture
          shutter
          iso
          createdAt
          updatedAt
        }
        user {
          id
          name
          email
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
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
        photoId
        content
        photo {
          id
          userId
          image
          description
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchUsers = /* GraphQL */ `
  query SearchUsers(
    $filter: SearchableUserFilterInput
    $sort: SearchableUserSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchUsers(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        email
        photos {
          nextToken
        }
        friends {
          nextToken
        }
        requests {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
