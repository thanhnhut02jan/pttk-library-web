import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Login from './components/Login'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: '16px',
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#1976d2'
  }
}));



export default function TopNav() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Library
          </Typography>
          <Login />
        </Toolbar>
      </AppBar>
    </div >
  );
}
