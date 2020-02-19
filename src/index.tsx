import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
