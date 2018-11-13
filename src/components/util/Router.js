import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import Login from '../views/login/Login';

export default function Router (props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path='/'
          component={Home}
          exact />
        <Route
          path='/login'
          component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
