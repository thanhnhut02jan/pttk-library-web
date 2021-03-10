import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from 'react'

import TopNav from './components/TopNav'
import BookList from './pages/BookList'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <TopNav />
      <React.Fragment>

        <Switch>
          <Route exact path='/'>
            <BookList />
          </Route>

          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </React.Fragment>
    </Router>

  );
}

export default App;
