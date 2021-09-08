import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Home from '../pages/Home';
import Forms from '../pages/Forms';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/forms" component={Forms} />
    </Switch>
  </Router>
);

export default Routes;
