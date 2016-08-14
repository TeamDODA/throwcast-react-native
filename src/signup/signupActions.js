import { Actions } from 'react-native-router-flux';
import { signinSuccess } from '../signin/signinActions';

export function signupInitialize() {
  return {
    type: 'SIGNUP_INITIALIZE',
  };
}

export function signupRequest() {
  return {
    type: 'SIGNUP_REQUEST',
  };
}

export function signupSuccess() {
  return {
    type: 'SIGNUP_SUCCESS',
  };
}

export function signupFail(statusMessage) {
  return {
    type: 'SIGNUP_FAIL',
    statusMessage,
  };
}

export function toSignup() {
  return (dispatch) => {
    dispatch(signupInitialize());
    Actions.signup();
  };
}

export function signup(userCredentials) {
  return (dispatch) => {
    dispatch(signupRequest());
    return fetch('http://localhost:8888/api/users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userCredentials),
    })
    .then((response) => response.json())
    .then((response) => {
      if (response.message) {
        // respond with error messages
        dispatch(signupFail(response.message));
      } else if (response.token) {
        // change to homepage
        dispatch(signupSuccess());
        dispatch(signinSuccess(response.token));
        Actions.homepage();
      }
    })
    .catch((e) => {
      dispatch(signupFail('connection error', e));
    });
  };
}
