import React from 'react';
import Router from './Router';
import { store } from '../../store/store';
import { Provider } from 'react-redux';
import ErrorBoundary from '../ErrorBoundary';

export default function App () {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Router />
      </Provider>
    </ErrorBoundary>
  );
}
