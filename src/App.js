import React from 'react';
import { Router, Route } from 'react-router';
import login from './Login';
import home from './Home';
import results from './Results';

import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Route path={'/'} component={login} />
      <Route exact path={'/home'} component={home} />
      <Route exact path={'/results'} component={results} />
    </Router>
  );
}

export default App;
