import React, { useState, useEffect } from 'react'

import firebase from "firebase/app";
import "firebase/auth";

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

function googleProvider() {
  var provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({
    'login_hint': 'user@example.com'
  });

  return provider;
}

function googleSignInPopup(provider) {
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
    }).catch((error) => {

    });
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  }
}));

function Login() {
  const classes = useStyles();

  let [currentUser, setCurrentUser] = useState(firebase.auth().currentUser);

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      setCurrentUser(user);
    }
    else {
      // User is signed out.
    }
  })

  return (
    <div className={classes.root}>
      {!currentUser && <Button color="inherit" onClick={() => googleSignInPopup(googleProvider())}>Login</Button>}
      <Avatar style={{ backgroundColor: '#eee' }} src={currentUser && currentUser.photoURL} />
    </div>
  )
}

export default Login
