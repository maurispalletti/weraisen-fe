import React from 'react';
import { Router, Route } from 'react-router';
import login from './Login';
import home from './Home';
import results from './Results';
import signup from './SignUp';
import profile from './Profile';
import serguia from './SerGuia';

import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Route path={'/'} component={login} />
      <Route exact path={'/home'} component={home} />
      <Route exact path={'/results'} component={results} />
      <Route exact path={'/signup'} component={signup} />
      <Route exact path={'/profile'} component={profile} />
      <Route exact path={'/serguia'} component={serguia} />
    </Router>
  );
}

export default App;
