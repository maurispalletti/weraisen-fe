import React from 'react';
import { Router, Route } from 'react-router';
import Login from './Login';
import Home from './Home';
import Results from './Results';
import Signup from './SignUp';
import Profile from './Profile';
import GuideProfile from './GuideProfile';
import Valoration from './Valoration';
import Chat from './Chat';
import Informe from './Informes';
import Matches from './Matches';

import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Route path={'/'} component={Login} />
      <Route exact path={'/home'} component={Home} />
      <Route exact path={'/results'} component={Results} />
      <Route exact path={'/signup'} component={Signup} />
      <Route exact path={'/profile'} component={Profile} />
      <Route exact path={'/guide'} component={GuideProfile} />
      <Route exact path={'/valoration'} component={Valoration} />
      <Route exact path={'/chat'} component={Chat} />
      <Route exact path={'/inform'} component={Informe} />
      <Route exact path={'/matches'} component={Matches} />
    </Router>
  );
}

export default App;
