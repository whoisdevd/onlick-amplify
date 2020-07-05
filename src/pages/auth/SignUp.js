import React, { useContext } from 'react';
import { Link as RouterLink, Redirect } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { createUser } from '../../graphql/mutations';
import { AuthContext } from '../../App';
import { getUser } from '../../graphql/queries';

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [promtVerification, setPromtVerification] = React.useState(false)
  const [verficationCode, setVerficationCode] = React.useState();
  const [signUpSuccess, setSignUpSuccess] = React.useState(false);
  // const [user, setUser] = React.useState();
  const { setAuthUser } = useContext(AuthContext);

  const handleChangeName = async event => {
    setName(event.target.value);
    console.log(name, verficationCode)
  }

  const handleChangeEmail = async event => {
    setEmail(event.target.value);
  }

  const handleChangePassword = async event => {
    setPassword(event.target.value);
  }

  const handleChangeCode = async event => {
    setVerficationCode(event.target.value);
  }

  const handleSignUp = async event => {
    event.preventDefault();
    try {
      const congnitoUser = await Auth.signUp({
        username: email,
        password: password,
        attributes: {
          name: name,
        }
      });

      console.log('Cognito User', congnitoUser);

      const response = await API.graphql(graphqlOperation(createUser, { input: { id: congnitoUser.userSub, name, email } }));
      console.log('App User', response);

      // setUser(response.data.createUser);
      setPromtVerification(true);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  }

  const handleVerification = async event => {
    event.preventDefault();
    try {
      const response = await Auth.confirmSignUp(email, verficationCode);
      console.log(response);

      if (response == 'SUCCESS') {
        // Internally force login to set user session in cognitor user pool
        handleLogin();
      }

    } catch (error) {
      console.log('error confirming sign up', error);
    }
  }

  const handleLogin = async _ => {
    try {
      const authUser = await Auth.signIn(email, password);
      const response = await API.graphql(graphqlOperation(getUser, { id: authUser.username }));
      console.log('App User', response);

      setAuthUser(response.data.getUser);
      setSignUpSuccess(true);

    } catch (error) {
      console.log(error)
      alert('Something went wrong!');
    }
  }

  const signUpForm = (
    <form onSubmit={handleSignUp} className={classes.form} noValidate>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        autoFocus
        id="name"
        label="Name"
        value={name}
        onChange={handleChangeName}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        value={email}
        onChange={handleChangeEmail}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        value={password}
        onChange={handleChangePassword}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Sign Up
      </Button>
      <Grid container>
        <Grid>
          <Link href="#" variant="body2" component={RouterLink} to="/signin">
            Sign In
          </Link>
        </Grid>
      </Grid>
    </form>
  );

  const verificationForm = (
    <form onSubmit={handleVerification} className={classes.form} noValidate>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="code"
        label="Verification Code"
        type="password"
        value={verficationCode}
        onChange={handleChangeCode}
      />
      <br />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Verify
      </Button>
    </form>
  );

  if (signUpSuccess) {
    return (
      <Redirect to={'/photos/new'} />
    );
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {promtVerification ? 'Verification' : 'Sign Up'}
        </Typography>
        {promtVerification ? verificationForm : signUpForm}
      </div>
    </Container>
  );
}
