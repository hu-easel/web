import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import TermList from './read/list/TermList';
import CreateTerm from './read/create/CreateTerm';
import PropTypes from 'prop-types';

export class TermRouter extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  };

  render () {
    const { match } = this.props;
    return (
      <Switch>
        <Route
          path={match.url}
          component={TermList} exact />
        <Route
          path={match.url + '/create'}
          component={CreateTerm} />
      </Switch>
    );
  }
}
