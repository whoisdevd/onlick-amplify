import React, { useContext } from 'react';
import { Link as RouterLink, Redirect } from "react-router-dom";
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { getUser } from '../../graphql/queries';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';


import EXIF from 'exif-js';
import { InputLabel, FormHelperText, Input, Typography } from '@material-ui/core';
import { AuthContext } from '../../App';

function Login(props) {
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

        setAuthUser(response.data.getUser)
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
        handleLogin()
        // setAuthUser()
        // setLoginSuccess(true);
      }

    } catch (error) {
      console.log('error confirming sign up', error);
    }
  }

  const loginForm = (
    <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column' }}>
      <TextField label="Email" value={email} onChange={handleChangeEmail} />
      <br />
      <TextField label="Password" type="password" value={password} onChange={handleChangePassword} />
      <br />
      <Button variant="contained" color="primary" type="submit">Login</Button>
      <br />
      <Button color="inherit" component={RouterLink} to="/signup">Signup</Button>
    </form>
  );

  const verificationForm = (
    <form onSubmit={handleVerification} style={{ display: 'flex', flexDirection: 'column' }}>
      <TextField label="Verification Code" type="password" value={verficationCode} onChange={handleChangeCode} />
      <br />
      <Button variant="contained" color="primary" type="submit">Verify</Button>
    </form>
  )

  if (loginSuccess) {
    return <Redirect to={'/'} />
  }

  return (
    <Container fixed>
      <Typography variant="h4" style={{ flexGrow: 1, paddingTop: '16px', paddingBottom: '16px', textAlign: 'center', marginBottom: '32px', }}>
        Login
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          {!promtVerification && loginForm}
          {promtVerification && verificationForm}
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </Container>
  );
}

export default Login;