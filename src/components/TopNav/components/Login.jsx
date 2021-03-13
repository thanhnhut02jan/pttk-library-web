import React, { useState, useEffect } from 'react'

import firebase from "firebase/app";
import "firebase/auth";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

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
  },
  list: {
    width: '250px'
  }
}));

function Login() {
  const classes = useStyles();

  let [currentUser, setCurrentUser] = useState();
  let [isDrawerOpen, setDrawerState] = useState(false);

  let toggleDrawer = (value) => {
    if (currentUser) setDrawerState(value);
  }

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      setCurrentUser(user);
    }
    else {

    }
  })

  function logOut() {
    firebase.auth()
      .signOut()
      .then(() => {
        setCurrentUser(null)
      });
  }

  const list = (
    <div
      className={classes.list}
      onClick={() => toggleDrawer(false)}
    >
      <List>
        <ListItem>
          <Button style={{ width: '100%', }} onClick={() => logOut()}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText>
              Logout
            </ListItemText>
          </Button>
        </ListItem>
      </List>
    </div>
  )

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
        onClick={() => toggleDrawer(true)}
      />
      <Drawer
        anchor={'right'}
        open={isDrawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        {list}
      </Drawer>
    </div>
  )
}

export default Login
