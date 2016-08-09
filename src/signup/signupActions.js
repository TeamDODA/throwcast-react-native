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

export function toSignin() {
  return (dispatch) => {
    dispatch(signupInitialize());
    Actions.signin();
  };
}

export function signup(name, password) {
  return (dispatch) => {
    dispatch(signupRequest());
    return fetch('http://localhost:8888/user/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        password,
      }),
    })
    .then((response) => response.json())
    .then((response) => {
      if (response.statusMessage) {
        // respond with error messages
        dispatch(signupFail(response.statusMessage));
      } else if (response.token) {
        // change to homepage
        dispatch(signupSuccess());
        dispatch(signinSuccess(response.token));
        Actions.playlist();
      }
    })
    .catch((e) => {
      dispatch(signupFail('connection error', e));
    });
  };
}
