import React, { useState, useEffect } from 'react'

import firebase from "firebase/app";
import "firebase/auth";

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Drawer from '@material-ui/core/Drawer';

import Typography from '@material-ui/core/Typography'

function googleProvider() {
  var provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({
    'login_hint': 'user@example.com'
  });

  return provider;
}

function googleSignInRedirect(provider) {
  firebase.auth()
    .signInWithRedirect(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */

    }).catch((error) => {
      alert('ok')
    });
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    cursor: 'pointer'
  },
  displayName: {
    lineHeight: 1.9,
    paddingRight: '16px'
  }
}));

function Login() {
  const classes = useStyles();

  let [currentUser, setCurrentUser] = useState(firebase.auth().currentUser);
  let [isDrawerOpen, setDrawerState] = useState(false);

  let toggleDrawer = () => {
    setDrawerState(!isDrawerOpen);
  }

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
      {!currentUser ?
        <Button
          color="inherit"
          onClick={() => googleSignInRedirect(googleProvider())}
        >
          Login
      </Button>
        :
        <Typography
          className={classes.displayName}
          variant='h6'
        >
          {currentUser && currentUser.displayName}
        </Typography>}
      <Avatar
        style={{ backgroundColor: '#eee' }}
        src={currentUser && currentUser.photoURL}
        onClick={() => toggleDrawer()}
      />
      <Drawer
        anchor={'right'}
        open={isDrawerOpen}
        onClose={() => toggleDrawer()}
      >
        <Button color={'inherit'}>Logout</Button>
      </Drawer>
    </div>
  )
}

export default Login
