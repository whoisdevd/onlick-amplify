/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateUserFriend = /* GraphQL */ `
  subscription OnCreateUserFriend {
    onCreateUserFriend {
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
export const onUpdateUserFriend = /* GraphQL */ `
  subscription OnUpdateUserFriend {
    onUpdateUserFriend {
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
export const onDeleteUserFriend = /* GraphQL */ `
  subscription OnDeleteUserFriend {
    onDeleteUserFriend {
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
export const onCreateFriendRequest = /* GraphQL */ `
  subscription OnCreateFriendRequest {
    onCreateFriendRequest {
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
export const onUpdateFriendRequest = /* GraphQL */ `
  subscription OnUpdateFriendRequest {
    onUpdateFriendRequest {
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
export const onDeleteFriendRequest = /* GraphQL */ `
  subscription OnDeleteFriendRequest {
    onDeleteFriendRequest {
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
export const onCreatePhoto = /* GraphQL */ `
  subscription OnCreatePhoto {
    onCreatePhoto {
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
export const onUpdatePhoto = /* GraphQL */ `
  subscription OnUpdatePhoto {
    onUpdatePhoto {
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
export const onDeletePhoto = /* GraphQL */ `
  subscription OnDeletePhoto {
    onDeletePhoto {
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
export const onCreateExif = /* GraphQL */ `
  subscription OnCreateExif {
    onCreateExif {
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
export const onUpdateExif = /* GraphQL */ `
  subscription OnUpdateExif {
    onUpdateExif {
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
export const onDeleteExif = /* GraphQL */ `
  subscription OnDeleteExif {
    onDeleteExif {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
