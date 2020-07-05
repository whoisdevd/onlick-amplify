/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createUserFriend = /* GraphQL */ `
  mutation CreateUserFriend(
    $input: CreateUserFriendInput!
    $condition: ModelUserFriendConditionInput
  ) {
    createUserFriend(input: $input, condition: $condition) {
      id
      userId
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
      friendId
      friend {
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
export const updateUserFriend = /* GraphQL */ `
  mutation UpdateUserFriend(
    $input: UpdateUserFriendInput!
    $condition: ModelUserFriendConditionInput
  ) {
    updateUserFriend(input: $input, condition: $condition) {
      id
      userId
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
      friendId
      friend {
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
export const deleteUserFriend = /* GraphQL */ `
  mutation DeleteUserFriend(
    $input: DeleteUserFriendInput!
    $condition: ModelUserFriendConditionInput
  ) {
    deleteUserFriend(input: $input, condition: $condition) {
      id
      userId
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
      friendId
      friend {
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
export const createFriendRequest = /* GraphQL */ `
  mutation CreateFriendRequest(
    $input: CreateFriendRequestInput!
    $condition: ModelFriendRequestConditionInput
  ) {
    createFriendRequest(input: $input, condition: $condition) {
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
export const updateFriendRequest = /* GraphQL */ `
  mutation UpdateFriendRequest(
    $input: UpdateFriendRequestInput!
    $condition: ModelFriendRequestConditionInput
  ) {
    updateFriendRequest(input: $input, condition: $condition) {
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
export const deleteFriendRequest = /* GraphQL */ `
  mutation DeleteFriendRequest(
    $input: DeleteFriendRequestInput!
    $condition: ModelFriendRequestConditionInput
  ) {
    deleteFriendRequest(input: $input, condition: $condition) {
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
export const createPhoto = /* GraphQL */ `
  mutation CreatePhoto(
    $input: CreatePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    createPhoto(input: $input, condition: $condition) {
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
export const updatePhoto = /* GraphQL */ `
  mutation UpdatePhoto(
    $input: UpdatePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    updatePhoto(input: $input, condition: $condition) {
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
export const deletePhoto = /* GraphQL */ `
  mutation DeletePhoto(
    $input: DeletePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    deletePhoto(input: $input, condition: $condition) {
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
export const createExif = /* GraphQL */ `
  mutation CreateExif(
    $input: CreateExifInput!
    $condition: ModelExifConditionInput
  ) {
    createExif(input: $input, condition: $condition) {
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
export const updateExif = /* GraphQL */ `
  mutation UpdateExif(
    $input: UpdateExifInput!
    $condition: ModelExifConditionInput
  ) {
    updateExif(input: $input, condition: $condition) {
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
export const deleteExif = /* GraphQL */ `
  mutation DeleteExif(
    $input: DeleteExifInput!
    $condition: ModelExifConditionInput
  ) {
    deleteExif(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
