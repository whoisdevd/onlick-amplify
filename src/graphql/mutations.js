/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPhoto = /* GraphQL */ `
  mutation CreatePhoto(
    $input: CreatePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    createPhoto(input: $input, condition: $condition) {
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
export const updatePhoto = /* GraphQL */ `
  mutation UpdatePhoto(
    $input: UpdatePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    updatePhoto(input: $input, condition: $condition) {
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
export const deletePhoto = /* GraphQL */ `
  mutation DeletePhoto(
    $input: DeletePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    deletePhoto(input: $input, condition: $condition) {
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
export const createExif = /* GraphQL */ `
  mutation CreateExif(
    $input: CreateExifInput!
    $condition: ModelExifConditionInput
  ) {
    createExif(input: $input, condition: $condition) {
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
export const updateExif = /* GraphQL */ `
  mutation UpdateExif(
    $input: UpdateExifInput!
    $condition: ModelExifConditionInput
  ) {
    updateExif(input: $input, condition: $condition) {
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
export const deleteExif = /* GraphQL */ `
  mutation DeleteExif(
    $input: DeleteExifInput!
    $condition: ModelExifConditionInput
  ) {
    deleteExif(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      photoID
      content
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
      photoID
      content
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
      photoID
      content
      createdAt
      updatedAt
    }
  }
`;
