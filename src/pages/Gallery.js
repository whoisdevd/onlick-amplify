import React, { useState, useEffect, useContext } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listPhotos, listFriendRequests } from '../graphql/queries';
import * as subscriptions from '../graphql/subscriptions';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import PeopleIcon from '@material-ui/icons/People';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import { AuthContext } from '../App';
import { deleteFriendRequest, createUserFriend } from '../graphql/mutations';

function Gallery(props) {
  const classes = useStyles();
  const { authUser } = useContext(AuthContext);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    loadPhotos();
  }, [])

  const loadPhotos = async () => {
    const resp = await API.graphql(graphqlOperation(listPhotos));
    console.log('photos', resp)
    setPhotos(resp.data.listPhotos.items);
  }

  if (!photos) {
    return <div>Loading....</div>
  }

  return (
    <Container>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          {photos.map((photo, index) => (
            <Grid item xs={6}>
              <div className="photo-wrapper">
                <img src={photo.image} />
              </div>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    minHeight: '100vh',
    marginBottom: theme.spacing(8),
    backgroundColor: theme.palette.background.paper,
  }
}));

export default Gallery;