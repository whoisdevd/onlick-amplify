import React from 'react';
import { Switch, Route } from "react-router-dom";
import Gallery from './pages/Gallery';
import NewPhoto from './pages/photos/NewPhoto';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import Profile from './pages/Profile';
import Logout from './pages/auth/Logout';

export default function Routes () {
  return (
    <Switch>
      <Route exact path="/signin">
        <SignIn />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/logout">
        <Logout />
      </Route>
      <Route exact path="/profile/:id">
        <Profile />
      </Route>
      <Route exact path="/">
        <Gallery />
      </Route>
      <Route path="/photos/new">
        <NewPhoto />
      </Route>
      <Route path="/photos/edit/:id">
      </Route>
      <Route path="/photos/:id">
      </Route>
    </Switch>
  );
}