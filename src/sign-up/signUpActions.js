import { Actions } from 'react-native-router-flux';
import { authSuccess } from '../modules/auth/authActions';

export function signUpInit() {
  return {
    type: 'SIGN_UP_INITIALIZE',
  };
}

export function signUpRequest() {
  return {
    type: 'SIGN_UP_REQUEST',
  };
}

export function signUpSuccess() {
  return {
    type: 'SIGN_UP_SUCCESS',
  };
}

export function signUpFail(statusMessage) {
  return {
    type: 'SIGN_UP_FAIL',
    statusMessage,
  };
}

export function toSignUp() {
  return (dispatch) => {
    dispatch(signUpInit());
    Actions.signUp();
  };
}

export function signup(userCredentials) {
  return (dispatch) => {
    dispatch(signUpRequest());
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
        dispatch(signUpFail(response.message));
      } else if (response.token) {
        // change to homepage
        dispatch(signUpSuccess());
        dispatch(authSuccess(response.token));
        Actions.homepage();
      }
    })
    .catch((e) => {
      dispatch(signUpFail('connection error', e));
    });
  };
}
