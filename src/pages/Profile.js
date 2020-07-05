import React, { useState, useEffect, useContext } from 'react';
import { Link as RouterLink, useParams } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import PeopleIcon from '@material-ui/icons/People';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Paper from '@material-ui/core/Paper';
import { CircularProgress } from '@material-ui/core';
import { AuthContext } from '../App';
import { API, graphqlOperation } from 'aws-amplify';
import { listPhotos, getUser, listFriendRequests, listUsers } from '../graphql/queries';
import { createFriendRequest, deleteFriendRequest, createUserFriend } from '../graphql/mutations';
import * as subscriptions from '../graphql/subscriptions';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  friendsList: {
    minHeight: '50vh',
  },
}));

function Friends(props) {
  const classes = useStyles();

  const {
    user,
    friends,
    friendRequests,
    onAcceptRequest,
    onRejectRequest,
  } = props;

  const [selectedTab, setTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  if (!user) {
    return;
  }

  return (
    <Paper className={classes.friendsList}>
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        variant="fullWidth"
      >
        <Tab label={`Friends (${friends.length})`} icon={<PeopleIcon />} />
        <Tab label={`Requests (${friendRequests.length})`} icon={<PeopleIcon />} />
      </Tabs>
      {selectedTab == 0 && (
        <List dense>
          {friends.map((friend) => {
            const labelId = `checkbox-list-secondary-label-${friend.id}`;
            return (
              <ListItem key={friend.id} button>
                <ListItemAvatar>
                  <Avatar
                  // src={`/static/images/avatar/${value + 1}.jpg`}
                  />
                </ListItemAvatar>
                <ListItemText id={labelId} primary={friend.name} />
              </ListItem>
            );
          })}
        </List>
      )}
      {selectedTab == 1 && (
        <List dense>
          {friendRequests.map((request) => {
            const labelId = `checkbox-list-secondary-label-${request.id}`;
            return (
              <ListItem key={request.id} button>
                <ListItemAvatar>
                  <Avatar
                    alt={`Avatar n°${request + 1}`}
                    src={`/static/images/avatar/${request.id}.jpg`}
                  />
                </ListItemAvatar>
                <ListItemText id={labelId} primary={request.sender?.name} />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="accept" onClick={_ => onAcceptRequest(request)}>
                    <CheckIcon />
                  </IconButton>
                  <IconButton edge="end" aria-label="reject" onClick={_ => onRejectRequest(request)}>
                    <CloseIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      )}
    </Paper>    
  )
}

export default function Profile() {
  const classes = useStyles();
  
  const { id: userId } = useParams();
  const { authUser } = useContext(AuthContext);
  const [user, setUser] = useState({});
  const [photos, setPhotos] = useState([]);
  const [friends, setFriends] = useState([]);
  const [friendRequests, setFriendRequests] = useState([]);
  const [friendRequestSubscription, setFriendRequestSubscription] = useState();

  useEffect( _ => {
    getUserProfile();
    loadPhotos();
    loadFriends();
    loadFriendRequests();
    subscribeToFriendRequests();

    return () => {
      console.log('Performing component clean up');

      // Stop receiving data updates from the subscription
      friendRequestSubscription && friendRequestSubscription.unsubscribe();
    };
  }, [userId])

  const getUserProfile = async () => {
    const response = await API.graphql(graphqlOperation(getUser, { id: userId }));
    console.log('Proifle User', response);
    setUser(response.data.getUser);
  }

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

  const handleInvite = async () => {
    try {
      const resp = await API.graphql(graphqlOperation(createFriendRequest, {
        input: {
          userId: userId,
          senderId: authUser.id
        }
      }));
      console.log('--->>>>', resp)
    } catch (error) {
      console.log(error)
    }
  }

  const loadFriends = async () => {
    if (!authUser) return;

    // const resp = await API.graphql(graphqlOperation(listUsers, {
    //   filter: {
    //     userId: {
    //       eq: authUser.id,
    //     }
    //   }
    // }));
    // console.log('friends', resp)
    // setFriends(resp.data.listUserFriends.items);
  }

  const loadFriendRequests = async () => {
    if (!authUser) return;

    const resp = await API.graphql(graphqlOperation(listFriendRequests, {
      filter: {
        userId: {
          eq: authUser.id,
        }
      }
    }));
    console.log('requests', resp)
    setFriendRequests(resp.data.listFriendRequests.items);
  }

  const subscribeToFriendRequests = () => {
    if (!authUser) return;

    console.log('init subscription', friendRequests)
    const subscription = API.graphql(
      graphqlOperation(subscriptions.onCreateFriendRequest)
    ).subscribe({
      next: ({ value }) => {
        console.log('new friend request', value, friendRequests)
        friendRequests.push(value.data.onCreateFriendRequest)
        console.log(friendRequests)
        setFriendRequests(friendRequests)
      }
    });

    setFriendRequestSubscription(subscription);
  }

  const handleAcceptRequest = async (request) => {
    // userFrienduserId: authUser.id,
    // userFriendfriendId: request.senderId,
    const resp = await API.graphql(graphqlOperation(createUserFriend, {
      input: {
        userId: authUser.id,
        friendId: request.senderId,
      }
    }));

    console.log(resp);
    const resp2 = await API.graphql(graphqlOperation(deleteFriendRequest, { input: { id: request.id } }));
    console.log(resp2);
    await loadFriendRequests();
    await loadFriends();
  }

  const handleRejectRequest = async (request) => {
    const resp = await API.graphql(graphqlOperation(deleteFriendRequest, { input: { id: request.id } }));
    console.log(resp);
    await loadFriendRequests();
  }

  if (!user) {
    return (
      <CircularProgress />
    )
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              {user.name}
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Profile Bio goes here.... Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                {!!authUser && (
                  userId == authUser.id ? (
                    <Grid item>
                      <Button variant="contained" color="primary" component={RouterLink} to="/photos/new">New Photo</Button>
                    </Grid>
                  ) : (
                      <Grid item>
                        <Button variant="contained" color="primary" onClick={handleInvite}>Invite as Friend</Button>
                      </Grid>
                    )
                )}
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container spacing={4}>
            {authUser && userId == authUser.id && (
              <Grid item md={4}>
                <Friends
                  user={authUser}
                  friends={friends}
                  friendRequests={friendRequests}
                  onAcceptRequest={handleAcceptRequest}
                  onRejectRequest={handleRejectRequest}
                />
              </Grid>
            )}
            <Grid item md={8}>
              <Grid container spacing={4}>
                {photos.map((photo, index) => (
                  <Grid item key={photo.id} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={photo.image}
                        title="Image title"
                      />
                      <CardActions>
                        <Button size="small" color="primary">
                          View
                    </Button>
                        <Button size="small" color="primary">
                          Edit
                    </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
