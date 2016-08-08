import { Action } from 'react-native-router-flux';

export function signinUserRequest() {
  return {
    type: 'SIGNIN_USER_REQUEST',
  };
}

export function signinUserSuccess(token) {
  return {
    type: 'SIGNIN_USER_SUCCESS',
    token,
  };
}

export function signinUserFail(statusMessage) {
  return {
    type: 'SIGNIN_USER_FAIL',
    statusMessage,
  };
}

export function signinUser(name, password) {
  return (dispatch) => {
    dispatch(signinUserRequest());
    return fetch('http://localhost:3000/iosAuth/local/signin', {
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
        dispatch(signinUserFail(response.statusMessage));
      } else if (response.token) {
        dispatch(signinUserSuccess(response.token));
        // change to homepage
        Action.playlist();
      }
    })
    .catch((e) => {
      dispatch(signinUserFail('connection error', e));
    });
  };
}
