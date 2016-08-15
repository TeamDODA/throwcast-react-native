import { Actions } from 'react-native-router-flux';
import store from 'react-native-simple-store';

import * as types from './constants';
import { authFormInit } from '../../components/auth-form/authFormActions';

export function authInit() {
  return { type: types.AUTH_INIT };
}

export function authPending() {
  return { type: types.AUTH_PENDING };
}

export function authSuccess(token) {
  return {
    type: types.AUTH_SUCCESS,
    token,
  };
}

export function authFailure(message) {
  return {
    type: types.AUTH_FAILURE,
    message,
  };
}

const authRequestOptions = function authRequestOptions(userCredentials) {
  return {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userCredentials),
  };
};

const handleResponseMessage = function handleResponseMessage() {
  return response => {
    if (response.message || !response.token) {
      throw new Error(`${response.message || 'Oops, something went wrong!'}`);
    }
    return response;
  };
};

const handleAuthSuccess = function handleAuthSuccess(dispatch) {
  return response => {
    store.save('@Auth:token', response.token);
    dispatch(authSuccess(response.token));
    dispatch(authFormInit());
    Actions.homepage();
  };
};

export function signIn(userCredentials) {
  return dispatch => {
    dispatch(authPending());
    return fetch('http://localhost:8888/auth/local', authRequestOptions(userCredentials))
      .then(response => response.json())
      .then(handleResponseMessage())
      .then(handleAuthSuccess(dispatch))
      .catch(e => dispatch(authFailure(e.message || e)));
  };
}

export function signUp(userCredentials) {
  return dispatch => {
    dispatch(authPending());
    return fetch('http://localhost:8888/api/users', authRequestOptions(userCredentials))
      .then(response => response.json())
      .then(handleResponseMessage())
      .then(handleAuthSuccess(dispatch))
      .catch(e => dispatch(authFailure(e.message || e)));
  };
}
