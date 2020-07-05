import React, { useContext } from 'react';
import { Link as RouterLink, Redirect } from "react-router-dom";
import { API, graphqlOperation, Storage } from 'aws-amplify';
import { createPhoto } from '../../graphql/mutations';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';


import EXIF from 'exif-js';
import { InputLabel, FormHelperText, Input, Typography, CircularProgress } from '@material-ui/core';
import { AuthContext } from '../../App';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const bucketUrl = 'https://onclick-uploads51158-dev.s3.ap-south-1.amazonaws.com/public/';
const previewLink = 'https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png';

function NewPhoto(props) {
  const classes = useStyles();

  const { authUser } = useContext(AuthContext);
  const [imagePreview, setImagePreview] = React.useState(previewLink);
  const [image, setImage] = React.useState();
  const [description, setDescription] = React.useState();
  const [exif, setExif] = React.useState({});
  const [isUploading, setIsUploading] = React.useState(false);
  const [isSuccess, setIsSuccessful] = React.useState(false);

  const handleChangeDescription = async event => {
    setDescription(event.target.value)
  }

  const handleImageUpload = async event => {
    var file = event.target.files[0];
    console.log(file);

    setImage(file);
    setImagePreview(URL.createObjectURL(file));

    // IMPORTANT! Use regular fn instead of arrow fn
    EXIF.getData(file, function () {
      let exifData = EXIF.getAllTags(this);
      console.log(exifData);
      console.log(EXIF.pretty(this));

      let exif = {
        camera: exifData.Model,
        aperture: exifData.FNumber,
        iso: exifData.ISOSpeedRatings,
        exposure: `${exifData.ExposureTime.numerator}/${exifData.ExposureTime.denominator}`,
      }
      setExif(exif);
    });
  }

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      setIsUploading(true);

      const result = await Storage.put(image.name, image, {
        level: 'public',
        acl: 'public-read',
        contentType: 'image/jpg'
      });
        // .then(result => {
        //   console.log('Upload result', result);
        //   const bucketUrl = 'https://onclick-uploads51158-dev.s3.ap-south-1.amazonaws.com/public/';
        //   let url = bucketUrl + file.name;
        //   setImage(url);
        // })
        // .catch(err => console.log('Upload error', err))
        // .finally(_ => setIsUploading(false));
      
      console.log('Upload result', result);

      let photo = await API.graphql(graphqlOperation(createPhoto, {
        input: {
          image: bucketUrl + image.name,
          description: description,
          userId: authUser.id,
        }
      }));

      console.log('New photo created:', photo)
      
      setImage('');
      setDescription('');
      setIsSuccessful(true);
    } catch (error) {
      console.log(error);
      alert(error.code);
      setIsUploading(false);
    }
  }

  if (isSuccess) {
    return <Redirect to={`/profile/${authUser.id}`} />
  }

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Add New Photo
        </Typography>
        <Grid container>
          <Grid item xs={6}>
            <div id="upload-photo" className="photo-wrapper">
              <label htmlFor="file-input">
                <img src={imagePreview} />
              </label>
              <FormHelperText id="my-helper-text">
                {isUploading ? <CircularProgress /> : 'Click on the image upload/change your photo'}
              </FormHelperText>
            </div>
          </Grid>
          <Grid item xs={6}>
            <form onSubmit={handleSubmit} className={classes.form} noValidate>
              <TextField id="file-input" label="Image" type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} />
              <TextField variant="outlined" margin="normal" fullWidth label="Description" multiline rows="2" onChange={handleChangeDescription} />
              <TextField variant="outlined" margin="normal" fullWidth label="Camera" value={exif.camera} readonly />
              <TextField variant="outlined" margin="normal" fullWidth label="Aperture" value={exif.aperture?.toString()} readonly />
              <TextField variant="outlined" margin="normal" fullWidth label="ISO" value={exif.iso} readonly />
              <TextField variant="outlined" margin="normal" fullWidth label="Exposure" value={exif.exposure} readonly />
              <TextField variant="outlined" margin="normal" fullWidth label="Shutter" value={exif.shutter} readonly />
              <Button fullWidth variant="contained" color="primary" type="submit" disabled={isUploading}>
                Submit
            </Button>
            </form>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default NewPhoto;