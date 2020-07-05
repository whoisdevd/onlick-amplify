import React from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { getPhoto } from '../../graphql/queries';
import { useParams } from "react-router-dom";

function ViewPost() {
  let { id } = useParams();
  const [photo, setPhoto] = React.useState();

  React.useEffect(() => {
    loadPhoto();
  }, [])

  const loadPhoto = async () => {
    const resp = await API.graphql(graphqlOperation(getPhoto, { id }));
    console.log('--->>>>', resp)
    setPhoto(resp.data.getPhoto);
  }

  if (!photo) {
    return <div>Loading....</div>
  }
  return (
    <div>
      <h1>{photo.image}</h1>
      <div>
        <span>By <b>{photo.id}</b></span>
      </div>
      <p>{photo.description}</p>
      <ul>
        {
          photo.comments.map(comment => (<li>{comment.content}</li>))
        }
      </ul>
    </div>
  );
}

export default ViewPost;