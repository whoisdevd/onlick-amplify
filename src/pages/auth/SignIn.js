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
import { getUser } from '../../graphql/queries';
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

export default function SignIn(props) {
  const classes = useStyles();

  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [promtVerification, setPromtVerification] = React.useState(false)
  const [verficationCode, setVerficationCode] = React.useState();
  const [loginSuccess, setLoginSuccess] = React.useState(false);
  const [user, setUser] = React.useState();
  const { authUser, setAuthUser } = useContext(AuthContext);

  const handleChangeEmail = async event => {
    setEmail(event.target.value)
  }

  const handleChangePassword = async event => {
    setPassword(event.target.value)
  }

  const handleChangeCode = async event => {
    setVerficationCode(event.target.value)
  }

  const handleLogin = async event => {
    event && event.preventDefault();

    try {
      const user = await Auth.signIn(email, password);
      console.log(typeof user, user);

      if (user && user?.username && user?.attributes.email_verified) {
        // setEmail('');
        // setPassword('');
        const response = await API.graphql(graphqlOperation(getUser, { id: user.username }));
        console.log('App User', response);

        setAuthUser(response.data.getUser);
        setLoginSuccess(true);
      }

    } catch (error) {
      console.log(error)
      if (error.code == 'UserNotConfirmedException') {
        setPromtVerification(true)
      }
    }
  }

  const handleVerification = async event => {
    event.preventDefault();
    try {
      const response = await Auth.confirmSignUp(email, verficationCode);
      console.log(response);

      if (response == 'SUCCESS') {
        handleLogin();
        // setAuthUser()
        // setLoginSuccess(true);
      }

    } catch (error) {
      console.log('error confirming sign up', error);
    }
  }

  const loginForm = (
    <form onSubmit={handleLogin} className={classes.form} noValidate>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
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
      {/* <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      /> */}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Sign In
      </Button>
      <Grid container>
        {/* <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
              </Link>
        </Grid> */}
        <Grid item>
          <Link href="#" variant="body2" component={RouterLink} to="/signup">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </form>
  );

  const verificationForm = (
    <form onSubmit={handleVerification} className={classes.form}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
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
  )

  if (loginSuccess) {
    return (
      <Redirect to={'/'} />
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
          {promtVerification ? 'Verification' : 'Sign in'}
        </Typography>
        {promtVerification ? verificationForm : loginForm}
      </div>
    </Container>
  );
}
