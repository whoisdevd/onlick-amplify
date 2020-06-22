/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePhoto = /* GraphQL */ `
  subscription OnCreatePhoto {
    onCreatePhoto {
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
export const onUpdatePhoto = /* GraphQL */ `
  subscription OnUpdatePhoto {
    onUpdatePhoto {
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
export const onDeletePhoto = /* GraphQL */ `
  subscription OnDeletePhoto {
    onDeletePhoto {
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
export const onCreateExif = /* GraphQL */ `
  subscription OnCreateExif {
    onCreateExif {
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
export const onUpdateExif = /* GraphQL */ `
  subscription OnUpdateExif {
    onUpdateExif {
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
export const onDeleteExif = /* GraphQL */ `
  subscription OnDeleteExif {
    onDeleteExif {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      photoID
      content
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      photoID
      content
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      photoID
      content
      createdAt
      updatedAt
    }
  }
`;
