import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import React from 'react'


import Container from "@material-ui/core/Container";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <Router>

      <React.Fragment>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Library
          </Typography>
          </Toolbar>
        </AppBar>

        <Container>
          <Switch>
            <Route exact path='/'>

            </Route>

            <Route exact path='/books-management/'>

            </Route>
          </Switch>
        </Container>
      </React.Fragment>
    </Router>

  );
}

export default App;
