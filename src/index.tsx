import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
