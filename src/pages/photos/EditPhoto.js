import React from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { updatePhoto } from '../../graphql/mutations';
import { getPhoto } from '../../graphql/queries';
import { useParams } from "react-router-dom";

function EditPhoto() {
  let { id } = useParams();
  const [image, setImage] = React.useState();
  const [description, setDescription] = React.useState();

  React.useEffect(() => {
    loadPhoto();
  }, [])

  const loadPhoto = async () => {
    const resp = await API.graphql(graphqlOperation(getPhoto, { id }));
    console.log('--->>>>', resp)
    setImage(resp.data.getPhoto.image);
    setDescription(resp.data.getPhoto.description);
  }

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      let input = {
        id,
        image,
        description
      }
      let updatedPhoto = await API.graphql(graphqlOperation(updatePhoto, { input }));
      setImage('');
      setDescription('');
      console.log('Post Updated ->>', updatedPhoto)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Title:
                <input type="text" value={image} onChange={
              (e) => setImage(e.target.value)
            } />
          </label>
        </div>
        <div>
          <label>
            Content:
                <textarea type="text" value={description} onChange={
              (e) => setDescription(e.target.value)
            } />
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default EditPhoto;