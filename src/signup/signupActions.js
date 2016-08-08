import { Action } from 'react-native-router-flux';
import { signinUserSuccess } from '../signin/signinActions';

export function signupUserRequest() {
  return {
    type: 'SIGNUP_USER_REQUEST',
  };
}

export function signupUserSuccess() {
  return {
    type: 'SIGNUP_USER_SUCCESS',
  };
}

export function signupUserFail(statusMessage) {
  return {
    type: 'SIGNUP_USER_FAIL',
    statusMessage,
  };
}

export function signupUser(name, password) {
  return (dispatch) => {
    dispatch(signupUserRequest());
    return fetch('http://localhost:3000/iosAuth/local/signup', {
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
        dispatch(signupUserFail(response.statusMessage));
      } else if (response.token) {
        // change to homepage
        dispatch(signupUserSuccess());
        dispatch(signinUserSuccess(response.token));
        Action.playlist();
      }
    })
    .catch((e) => {
      dispatch(signupUserFail('connection error', e));
    });
  };
}
