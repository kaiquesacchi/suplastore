import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import OrderCompleted from './pages/OrderCompleted';
import Authentication from './pages/Authentication';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/authentication" component={Authentication} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/categories/:categoryName" component={Home} />
        <Route exact path="/orderCompleted" component={OrderCompleted} />
      </Switch>
    </Router>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
