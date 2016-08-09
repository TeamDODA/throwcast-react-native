import { Actions } from 'react-native-router-flux';

export function signinInitialize() {
  return {
    type: 'SIGNIN_INITIALIZE',
  };
}

export function signinRequest() {
  return {
    type: 'SIGNIN_REQUEST',
  };
}

export function signinSuccess(token) {
  return {
    type: 'SIGNIN_SUCCESS',
    token,
  };
}

export function signinFail(statusMessage) {
  return {
    type: 'SIGNIN_FAIL',
    statusMessage,
  };
}

export function toSignin() {
  return (dispatch) => {
    dispatch(signinInitialize());
    Actions.signin();
  };
}

export function signin(name, password) {
  return (dispatch) => {
    dispatch(signinRequest());
    Actions.playlist();
    return fetch('http://localhost:8888/user/signin', {
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
        // respond with error messages such as
        // incorrect user name and email
        dispatch(signinFail(response.statusMessage));
      } else if (response.token) {
        dispatch(signinSuccess(response.token));
        Actions.playlist();
      }
    })
    .catch((e) => {
      dispatch(signinFail('connection error', e));
    });
  };
}
