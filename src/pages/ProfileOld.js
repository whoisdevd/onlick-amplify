import React, { useState, useEffect, useContext } from 'react';
import { Link as RouterLink, useParams } from "react-router-dom";
import { API, graphqlOperation } from 'aws-amplify';
import { listPhotos, getUser } from '../graphql/queries';
import { createFriendRequest } from '../graphql/mutations';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { AuthContext } from '../App';


function Profile(props) {
  const classes = useStyles();
  
  const { authUser, setAuthUser } = useContext(AuthContext);
  const { id: userId } = useParams();
  const [photos, setPhotos] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    loadPhotos();
    getUserProfile();
  }, [])

  const loadPhotos = async () => {
    console.log(authUser);
    const resp = await API.graphql(graphqlOperation(listPhotos, {
      filter: {
        userId: {
          eq: userId,
        }
      }
    }));
    console.log('--->>>>', resp)
    setPhotos(resp.data.listPhotos.items);
  }

  const getUserProfile = async () => {
    const response = await API.graphql(graphqlOperation(getUser, { id: userId }));
    console.log('Proifle User', response);
    setUser(response.data.getUser);
  }

  const handleInvite = async () => {
    try {
      const resp = await API.graphql(graphqlOperation(createFriendRequest, { input: { userId, senderId: authUser.id } }));
      console.log('--->>>>', resp)
    } catch (error) {
      console.log(error)
    }
  }

  if (!photos) {
    return <div>Loading....</div>
  }

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper style={{ padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '32px', }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Typography gutterBottom variant="h5">
              {user.name}
            </Typography>
            {userId == authUser.id ? (
              <Button variant="contained" color="primary" component={RouterLink} to="/photos/new">New Photo</Button>
            ): (
              <Button variant="contained" color="primary" onClick={handleInvite}>Invite as Friend</Button>
            )}
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper style={{ display: 'flex', flexDirection: 'row', flex: 1, marginTop: '32px', }}>
            {photos.map((photo, index) => (
              <Grid key={index} item xs={3}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={photo.image}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {photo.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    {/* <Button size="small" color="primary">Share</Button> */}
                    {/* <Button size="small" color="primary">Learn More</Button> */}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

const useStyles = makeStyles({
  root: {
    // display: 'flex',
    width: '100%',
  },
  media: {
    height: 140,
  },
});


export default Profile;