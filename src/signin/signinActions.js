import { Action } from 'react-native-router-flux';

export function loginUserRequest() {
  return {
    type: 'LOGIN_USER_REQUEST',
  };
}

export function signinUserSuccess(token) {
  return {
    type: 'SIGNIN_USER_SUCCESS',
    token,
  };
}

export function signinUser(name, password) {
  return (dispatch) => {
    dispatch(loginUserRequest());
    return fetch('http://localhost:3000/iosAuth/local/signin', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
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
      } else if (response.token) {
        dispatch(signinUserSuccess(response.token));
        // change to homepage
        Action.playlist();
      }
    })
    .done();
  };
}
