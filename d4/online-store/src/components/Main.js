import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './Home';
import Navigation from './navigation/Navigation';
import Store from './store/Store';


function Main() {
  return (
        <>
        <Navigation /> 
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/store" component={Store} />
        </Switch>
        </>
  );
}

export default Main;