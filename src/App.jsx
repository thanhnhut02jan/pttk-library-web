import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from 'react'

import TopNav from './components/TopNav'
import BookList from './pages/BookList'

function App() {
  return (
    <Router>
      <TopNav />
      <React.Fragment>

        <Switch>
          <Route exact path='/'>
            <BookList />
          </Route>

          <Route exact path='/books-management/'>

          </Route>
        </Switch>
      </React.Fragment>
    </Router>

  );
}

export default App;
