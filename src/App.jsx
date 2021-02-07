import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import TopNav from './components/TopNav';
import Home from './pages/home';
import Product from './pages/products'

function App() {
  return (
    <Router>
      <TopNav />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route exact path='/products/'>
          <Product />
        </Route>

      </Switch>
    </Router>

  );
}

export default App;
