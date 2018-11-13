import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../views/Home';
import Login from '../views/login/Login';
import ErrorPage from '../ErrorPage';

export default function Router () {
  return (
    <Switch>
      <Route
        path='/'
        exact
        component={Home} />
      <Route
        path='/login'
        component={Login} />

      <Route
        path='/'
        render={() => <ErrorPage title='Page not found'
          message='The page you were looking for could not be found' />} />
    </Switch>
  );
}
