import {combineReducers} from 'redux';
import {authenticationReducer} from './authentication/reducers';

export function rootReducer (state = {}, action) {
  return combineReducers({
    authentication: authenticationReducer
  });
}
