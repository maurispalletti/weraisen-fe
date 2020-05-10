import React from 'react';
import { Router, Route, Switch } from 'react-router';
import Login from './Login';
import Search from './Search1';
import Results from './Results';
import Signup from './SignUp';
import Profile from './Profile';
import GuideProfile from './GuideProfile';
import Valoration from './Valoration';
import Chat from './Chat';
import Informe from './Informes';
import Matches from './Matches';
import Terminos from './termycond'
import Filtros from './Search'

import { createBrowserHistory } from 'history';
import Home from './Home';
import Admin from './AdminProfile';
import Prueba from '../src/components/DenunciaPopUp';
import Notificaciones from '../src/PerfilNotificaciones';
import Chats from '../src/PerfilChats';
import GuideView from './GuideView';
import Error from '../src/error404'


const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
      <Route exact path={'/'} component={Login} />
      <Route exact path={'/login'} component={Login} />
      <Route exact path={'/search'} component={Search} />
      <Route exact path={'/results'} component={Results} />
      <Route exact path={'/signup'} component={Signup} />
      <Route exact path={'/profile'} component={Profile} />
      <Route exact path={'/guide'} component={GuideProfile} />
      <Route exact path={'/valoration'} component={Valoration} />
      <Route exact path={'/chat'} component={Chat} />
      <Route exact path={'/inform'} component={Informe} />
      <Route exact path={'/matches'} component={Matches} />
      <Route exact path={'/terminos'} component={Terminos} />
      <Route exact path={'/home'} component={Home} />
      <Route exact path={'/admin'} component={Admin} />
      <Route exact path={'/prueba'} component={Prueba} />
      <Route exact path={'/filters'} component={Filtros} />
      <Route exact path={'/notificaciones'} component={Notificaciones} />
      <Route exact path={'/chats'} component={Chats} />
      <Route exact path={'/guideView'} component={GuideView}/>
      
      <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
