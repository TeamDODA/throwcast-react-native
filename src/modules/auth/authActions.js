import { Actions } from 'react-native-router-flux';
import store from 'react-native-simple-store';

import { types } from './';
import { authFormInit } from '../../components/auth-form/authFormActions';
import { changeFocus } from '../navbar/navbarActions';
import { initializePlayer } from '../player/playerActions';
import { subscriptionsLoadingSucc, getSubscriptions } from '../subscription/subscriptionActions';

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
    getSubscriptions();
    Actions.main();
  };
};

const authPost = function authRequest(uri, credentials) {
  return dispatch => {
    dispatch(authPending());
    return fetch(`http://localhost:8888${uri}`, authRequestOptions(credentials))
      .then(response => response.json())
      .then(handleResponseMessage())
      .then(handleAuthSuccess(dispatch))
      .catch(e => dispatch(authFailure(e.message || e)));
  };
};

export function signIn(credentials) {
  return authPost('/auth/local', credentials);
}

export function signUp(credentials) {
  return authPost('/api/users', credentials);
}

const navigateTo = function navigateTo(next) {
  return dispatch => store.delete('@Auth:token')
    .then(() => {
      dispatch(initializePlayer());
      dispatch(changeFocus('homepage'));
      dispatch(authFormInit());
      dispatch(authInit());
      Actions[next]();
    });
};

export function toSignIn() {
  return navigateTo('signIn');
}

export function toSignUp() {
  return navigateTo('signUp');
}

export function authCheck(token) {
  return dispatch => fetch('http://localhost:8888/api/users/me', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  })
  .then((response) => response.json())
  .then((response) => {
    if (response.message) {
      dispatch(authFailure(response.message));
    } else {
      dispatch(authSuccess(token));
      dispatch(subscriptionsLoadingSucc(response._id, response.subscriptions));
      Actions.main();
    }
  })
  .catch(() => {
    dispatch(authFailure('Session expired'));
  });
}
