import React, { useContext } from 'react';
import { Link as RouterLink, Redirect} from "react-router-dom";

import { API, graphqlOperation, Auth } from 'aws-amplify';

import { createUser } from '../../graphql/mutations';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';


import EXIF from 'exif-js';
import { InputLabel, FormHelperText, Input, Typography } from '@material-ui/core';
import { AuthContext } from '../../App';

function SignUp(props) {
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [promtVerification, setPromtVerification] = React.useState(false)
  const [verficationCode, setVerficationCode] = React.useState();
  const [signUpSuccess, setSignUpSuccess] = React.useState(false);
  const [user, setUser] = React.useState();
  const { authUser, setAuthUser } = useContext(AuthContext);

  const handleChangeName = async event => {
    setName(event.target.value)
  }

  const handleChangeEmail = async event => {
    setEmail(event.target.value)
  }

  const handleChangePassword = async event => {
    setPassword(event.target.value)
  }

  const handleChangeCode = async event => {
    setVerficationCode(event.target.value)
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

      setUser(response.data.createUser);
      setPromtVerification(true);

      // if (user && user.userConfirmed == false) {
      // } 
    } catch (error) {
      console.log(error)
      alert(error.message)
    }
  }

  const handleVerification = async event => {
    event.preventDefault();
    try {
      const response = await Auth.confirmSignUp(email, verficationCode);
      console.log(response);

      if (response == 'SUCCESS') {
        // setName('');
        // setEmail('');
        // setPassword('');
        setAuthUser(user);
        setSignUpSuccess(true);
      }

    } catch (error) {
      console.log('error confirming sign up', error);
    }
  }

  const loginForm = (
    <form onSubmit={handleSignUp} style={{ display: 'flex', flexDirection: 'column' }}>
      <TextField label="Name" value={name} onChange={handleChangeName} />
      <br />
      <TextField label="Email" value={email} onChange={handleChangeEmail} />
      <br />
      <TextField label="Password" type="password" value={password} onChange={handleChangePassword} />
      <br />
      <Button variant="contained" color="primary" type="submit">Submit</Button>
      <br />
      <Button color="inherit" component={RouterLink} to="/login">Login</Button>
    </form>
  );

  const verificationForm = (
    <form onSubmit={handleVerification} style={{ display: 'flex', flexDirection: 'column' }}>
      <TextField label="Verification Code" type="password" value={verficationCode} onChange={handleChangeCode} />
      <br />
      <Button variant="contained" color="primary" type="submit">Verify</Button>
    </form>
  )

  if (signUpSuccess) {
    return <Redirect to={'/photos/new'} />
  }

  return (
    <Container fixed>
      <Typography variant="h4" style={{ flexGrow: 1, paddingTop: '16px', paddingBottom: '16px', textAlign: 'center', marginBottom: '32px', }}>
        Sign Up
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

export default SignUp;